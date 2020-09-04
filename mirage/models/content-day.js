import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  contentWeek: belongsTo('contentWeek'),
  contents: hasMany('content'),
});
