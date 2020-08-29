import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class AddSubjectFormComponent extends Component {
  @service store;

  @tracked name = '';

  @action async handleAdd() {
    const subject = this.store.createRecord('subject', {
      name: this.name,
    });

    try {
      await subject.save();
      this.name = '';
    } catch (e) {
      console.error(e);
    }
  }
}
