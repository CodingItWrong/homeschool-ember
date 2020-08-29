import Route from '@ember/routing/route';

export default class DaysRoute extends Route {
  model() {
    return this.store.findAll('day');
  }
}
