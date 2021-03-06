import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  subject: belongsTo('subject'),
  contentDay: belongsTo('contentDay'),
});
