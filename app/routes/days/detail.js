import Route from '@ember/routing/route';

export default class DaysDetailRoute extends Route {
  model({ day_id }) {
    return this.store.findRecord('day', day_id, {
      include: [
        'studentDays',
        'studentDays.student',
        'studentDays.contentDay',
        'studentDays.contentDay.contents',
        'studentDays.contentDay.contents.subject',
        'schedulings',
        'schedulings.student',
        'schedulings.content',
        'schedulings.content.subject',
      ].join(','),
      reload: true,
    });
  }
}
