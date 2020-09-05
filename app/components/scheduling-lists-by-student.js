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
}
