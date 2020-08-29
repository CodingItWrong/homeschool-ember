import Route from '@ember/routing/route';

export default class FormsDetailRoute extends Route {
  model({ form_id }) {
    return this.store.findRecord('form', form_id, {
      include: ['contents', 'contents.subject'].join(','),
      reload: true,
    });
  }
}
