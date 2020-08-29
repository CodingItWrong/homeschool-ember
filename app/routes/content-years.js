import Route from '@ember/routing/route';

export default class ContentYearsRoute extends Route {
  model() {
    return this.store.findAll('contentYear');
  }
}
