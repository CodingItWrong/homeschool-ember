import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class AddSubjectToContentYearFormComponent extends Component {
  @tracked subject = null;

  @action async handleAdd() {
    if (!this.subject) {
      return;
    }

    const { contentYear } = this.args;

    contentYear.subjects.pushObject(this.subject);

    try {
      await contentYear.save();
      this.subject = '';
    } catch (e) {
      console.error(e);
    }
  }
}
