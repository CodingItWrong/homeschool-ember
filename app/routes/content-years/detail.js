import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default class ContentYearsDetailRoute extends Route {
  model({ content_year_id }) {
    return RSVP.hash({
      contentYear: this.store.findRecord('contentYear', content_year_id, {
        include: ['subjects', 'contentWeeks'].join(','),
        reload: true,
      }),
      subjects: this.store.findAll('subject', { reload: true }),
    });
  }
}
