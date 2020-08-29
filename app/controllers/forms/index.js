import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class FormsIndexController extends Controller {
  @service router;

  @action goToForm(form) {
    this.router.transitionTo('forms.detail', form.id);
  }
}
