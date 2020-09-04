import Route from '@ember/routing/route';

export default class ContentDayRoute extends Route {
  model({ content_day_id }) {
    return this.store.findRecord('contentDay', content_day_id, {
      include: ['contentWeek', 'contents', 'contents.subject'].join(','),
      reload: true,
    });
  }
}
