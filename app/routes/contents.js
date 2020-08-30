import Route from '@ember/routing/route';

export default class ContentYearsDetailContentRoute extends Route {
  model({ content_id }) {
    return this.store.findRecord('content', content_id, {
      include: ['subject', 'contentYear', 'contentYear.subjects'].join(','),
      reload: true,
    });
  }
}
