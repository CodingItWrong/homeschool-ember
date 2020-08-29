import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';

export default class DayListComponent extends Component {
  @service router;

  @action goToDay(day) {
    this.router.transitionTo('days.detail', day.id);
  }
}
