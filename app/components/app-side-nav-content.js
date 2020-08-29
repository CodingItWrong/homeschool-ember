import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';

export default class AppSideNavContentComponent extends Component {
  @service session;
  @service router;

  @action goToRoute(route) {
    this.router.transitionTo(route);
  }
}
