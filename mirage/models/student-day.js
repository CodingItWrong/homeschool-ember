import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  day: belongsTo('day'),
  student: belongsTo('student'),
  contentDay: belongsTo('contentDay'),
});
