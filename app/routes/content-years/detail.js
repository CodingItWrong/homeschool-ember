import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default class ContentYearsDetailRoute extends Route {
  model({ form_id }) {
    return RSVP.hash({
      contentYear: this.store.findRecord('contentYear', form_id, {
        include: ['subjects', 'contents', 'contents.subject'].join(','),
        reload: true,
      }),
      subjects: this.store.findAll('subject', { reload: true }),
    });
  }
}
