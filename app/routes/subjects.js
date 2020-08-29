import Route from '@ember/routing/route';

export default class SubjectsRoute extends Route {
  model() {
    return this.store.findAll('subject', { reload: true });
  }
}
