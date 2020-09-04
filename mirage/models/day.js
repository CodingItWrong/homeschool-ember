import { Model, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  schedulings: hasMany('scheduling'),
  studentDays: hasMany('studentDay'),
});
