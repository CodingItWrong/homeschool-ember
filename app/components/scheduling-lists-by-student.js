import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import matchesProperty from 'lodash/matchesProperty';
import uniq from 'lodash/uniq';

export default class SchedulingListsByStudentComponent extends Component {
  @service store;

  get schedulingsGroupedByStudent() {
    const { day } = this.args;

    const students = uniq([
      ...day.studentDays.map(studentDay => studentDay.student),
      ...day.schedulings.map(scheduling => scheduling.student),
    ]);

    const groups = students.map(student => {
      const contentSchedulingPairs = uniq([
        ...day.studentDays
          .filter(matchesProperty('student.id', student.id))
          .flatMap(studentDay =>
            studentDay.contentDay.contents.map(content => ({
              content,
              scheduling: null,
            })),
          ),
        ...day.schedulings
          .filter(matchesProperty('student.id', student.id))
          .map(scheduling => ({
            content: scheduling.content,
            scheduling,
          })),
      ]);

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
