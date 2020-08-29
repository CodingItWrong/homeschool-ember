import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class DaysIndexController extends Controller {
  @service router;

  @action goToDay(day) {
    this.router.transitionTo('days.detail', day.id);
  }
}
