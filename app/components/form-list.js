import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';

export default class FormListComponent extends Component {
  @service router;

  @action goToForm(form) {
    this.router.transitionTo('forms.detail', form.id);
  }
}
