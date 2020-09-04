import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';

export default class ContentWeekListComponent extends Component {
  @service router;

  @action goToContentWeek(contentWeek) {
    this.router.transitionTo('content-week', contentWeek.id);
  }
}
