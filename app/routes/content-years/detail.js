import Route from '@ember/routing/route';

export default class ContentYearsDetailRoute extends Route {
  model({ form_id }) {
    return this.store.findRecord('contentYear', form_id, {
      include: ['subjects', 'contents', 'contents.subject'].join(','),
      reload: true,
    });
  }
}
