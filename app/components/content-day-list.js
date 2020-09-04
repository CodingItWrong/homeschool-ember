import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';

export default class ContentDayListComponent extends Component {
  @service router;

  @action goToContentDay(contentDay) {
    this.router.transitionTo('content-day', contentDay.id);
  }
}
