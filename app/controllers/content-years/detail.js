import Controller from '@ember/controller';
import groupBy from 'lodash/groupBy';

export default class ContentYearsDetailController extends Controller {
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
}
