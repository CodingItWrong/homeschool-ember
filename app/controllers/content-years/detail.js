import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import groupBy from 'lodash/groupBy';

export default class ContentYearsDetailController extends Controller {
  @service router;

  get contentsGroupedBySubjectId() {
    const contentsWithSubjectId = this.model.contentYear.contents
      .toArray()
      .map(content => ({ subjectId: content.subject.id, content }));
    const groups = groupBy(contentsWithSubjectId, 'subjectId');
    const groupsWithUnwrappedContents = Object.fromEntries(
      Object.entries(groups).map(([subjectId, wrappedContents]) => {
        const contents = wrappedContents.map(({ content }) => content);
        return [subjectId, contents];
      }),
    );
    return groupsWithUnwrappedContents;
  }

  @action async removeSubject(subject) {
    const { contentYear } = this.model;

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
      console.error(e);
    }
  }

  @action goToContent(content) {
    this.router.transitionTo('contents', content.id);
  }
}
