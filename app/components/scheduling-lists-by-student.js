import { action } from '@ember/object';
import Component from '@glimmer/component';
import matchesProperty from 'lodash/matchesProperty';
import uniq from 'lodash/uniq';

export default class SchedulingListsByStudentComponent extends Component {
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

  @action handleToggleComplete() {}
}
