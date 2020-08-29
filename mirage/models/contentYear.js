import { Model, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  subjects: hasMany('subject'),
  contents: hasMany('content'),
});
