import { action } from '@ember/object';
import Component from '@glimmer/component';

export default class ContentYearSubjectListComponent extends Component {
  @action async handleDelete(subject) {
    const { contentYear } = this.args;

    if (
      !confirm(
        `Are you sure you want to remove ${subject.name} from ${contentYear.name}?`,
      )
    ) {
      return;
    }

    contentYear.subjects.removeObject(subject);

    try {
      await contentYear.save();
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  }
}
