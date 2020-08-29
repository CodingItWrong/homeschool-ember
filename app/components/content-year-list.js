import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';

export default class ContentYearListListComponent extends Component {
  @service router;

  @action goToContentYear(contentYear) {
    this.router.transitionTo('content-years.detail', contentYear.id);
  }
}
