import Route from '@ember/routing/route';

export default class FormsRoute extends Route {
  model() {
    return this.store.findAll('form');
  }
}
