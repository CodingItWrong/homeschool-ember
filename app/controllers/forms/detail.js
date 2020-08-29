import Controller from '@ember/controller';
import groupBy from 'lodash/groupBy';

export default class FormsDetailController extends Controller {
  get contentsGroupedBySubject() {
    const groupsObject = groupBy(this.model.contents.toArray(), 'subject');
    const groups = Object.entries(groupsObject).map(([, contents]) => ({
      subject: contents[0].subject,
      contents,
    }));
    return groups;
  }
}
