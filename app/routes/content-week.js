import Route from '@ember/routing/route';

export default class ContentWeekRoute extends Route {
  model({ content_week_id }) {
    return this.store.findRecord('contentWeek', content_week_id, {
      include: ['contentDays'].join(','),
      reload: true,
    });
  }
}
