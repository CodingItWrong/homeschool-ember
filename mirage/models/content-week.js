import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  contentYear: belongsTo('contentYear'),
  contentDays: hasMany('contentDay'),
});
