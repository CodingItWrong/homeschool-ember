import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  day: belongsTo('day'),
  student: belongsTo('student'),
  content: belongsTo('content'),
});
