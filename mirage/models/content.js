import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  subject: belongsTo('subject'),
  contentYear: belongsTo('contentYear'),
});
