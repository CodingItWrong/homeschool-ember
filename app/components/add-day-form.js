import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { parseDate } from 'homeschool/utils';

export default class AddDayFormComponent extends Component {
  @service store;

  @tracked date = null;

  @action async handleAdd() {
    if (!this.date) {
      return;
    }

    const date = parseDate(this.date);

    const day = this.store.createRecord('day', { date });

    try {
      await day.save();
      this.date = null;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  }
}
