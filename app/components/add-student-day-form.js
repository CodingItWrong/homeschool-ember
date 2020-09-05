import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class AddStudentDayFormComponent extends Component {
  @service store;

  @tracked student;
  @tracked contentWeek;
  @tracked contentDay;

  @action async handleAdd() {
    const { day, onAdd } = this.args;

    try {
      const studentDay = this.store.createRecord('studentDay', {
        day,
        student: this.student,
        contentDay: this.contentDay,
      });
      await studentDay.save();
      onAdd();
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  }
}
