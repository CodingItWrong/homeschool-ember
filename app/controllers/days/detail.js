import Controller from '@ember/controller';
import { action } from '@ember/object';
import groupBy from 'lodash/groupBy';

export default class DaysDetailController extends Controller {
  get schedulingsGroupedByStudent() {
    const groupsObject = groupBy(this.model.schedulings.toArray(), 'student');
    const groups = Object.entries(groupsObject).map(([, schedulings]) => ({
      student: schedulings[0].student,
      schedulings,
    }));
    return groups;
  }

  @action async handleToggleComplete(scheduling) {
    scheduling.complete = !scheduling.complete;

    try {
      await scheduling.save();
    } catch (e) {
      scheduling.rollbackAttributes();
    }
  }
}
