import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';

export default class DayListComponent extends Component {
  @service router;

  @action goToDay(day) {
    this.router.transitionTo('days.detail', day.id);
  }

  @action async handleDelete(day) {
    try {
      await day.destroyRecord();
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  }
}
