import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import matchesProperty from 'lodash/matchesProperty';
import property from 'lodash/property';
import uniq from 'lodash/uniq';
import uniqBy from 'lodash/uniqBy';

export default class SchedulingListsByStudentComponent extends Component {
  @service store;

  get schedulingsGroupedByStudent() {
    const { day } = this.args;

    const students = uniq([
      ...day.studentDays.map(property('student')),
      ...day.schedulings.map(property('student')),
    ]);

    const groups = students.map(student => {
      const studentDay = day.studentDays.find(
        matchesProperty('student.id', student.id),
      );

      const contentSchedulingPairs = uniqBy(
        [
          // schedulings must come first so uniqBy prefers them
          ...day.schedulings
            .filter(matchesProperty('student.id', student.id))
            .map(scheduling => ({
              content: scheduling.content,
              scheduling,
            })),
          ...day.studentDays
            .filter(matchesProperty('student.id', student.id))
            .flatMap(studentDay =>
              studentDay.contentDay.contents.map(content => ({
                content,
                scheduling: null,
              })),
            ),
        ],
        property('content.id'),
      );

      return {
        student,
        studentDay,
        contentSchedulingPairs,
      };
    });

    return groups;
  }

  @action async handleToggleComplete({ content, scheduling }, student) {
    if (scheduling) {
      scheduling.complete = !scheduling.complete;

      try {
        await scheduling.save();
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
        scheduling.rollbackAttributes();
      }
    } else {
      const { day } = this.args;

      const newScheduling = this.store.createRecord('scheduling', {
        day,
        student,
        content,
        complete: true,
      });
      try {
        await newScheduling.save();
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
        newScheduling.unloadRecord();
      }
    }
  }

  @action async editGroup(group) {
    const { day, onCustomizeStudentDay } = this.args;
    const { student, studentDay, contentSchedulingPairs } = group;

    try {
      // for each content item, create an incomplete scheduling if one doesn't already exist
      for (let content of studentDay.contentDay.contents.toArray()) {
        const scheduling = contentSchedulingPairs.find(
          pair => pair.content.id === content.id && pair.scheduling !== null,
        );
        if (!scheduling) {
          const scheduling = this.store.createRecord('scheduling', {
            day,
            student,
            content,
            complete: false,
          });
          await scheduling.save();
          onCustomizeStudentDay();
        }
      }

      // remove studentDay
      await studentDay.destroyRecord();
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  }

  @action async removeGroup(group) {
    const { student, studentDay, contentSchedulingPairs } = group;

    if (
      !confirm(
        `Are you sure you want to remove ${student.name}'s records for the day? All completed content will be lost.`,
      )
    ) {
      return;
    }

    try {
      await studentDay.destroyRecord();

      const schedulings = contentSchedulingPairs
        .map(property('scheduling'))
        .filter(s => s);
      for (let scheduling of schedulings) {
        await scheduling.destroyRecord();
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  }
}
