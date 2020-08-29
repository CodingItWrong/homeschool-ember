import { action } from '@ember/object';
import Component from '@glimmer/component';

export default class SubjectListComponent extends Component {
  @action async handleDelete(subject) {
    try {
      await subject.destroyRecord();
    } catch (e) {
      console.error(e);
    }
  }
}
