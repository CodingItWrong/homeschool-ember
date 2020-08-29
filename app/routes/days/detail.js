import Route from '@ember/routing/route';

export default class DaysDetailRoute extends Route {
  model({ day_id }) {
    return this.store.findRecord('day', day_id, {
      include: [
        'schedulings',
        'schedulings.student',
        'schedulings.content',
        'schedulings.content.subject',
      ].join(','),
    });
  }
}
