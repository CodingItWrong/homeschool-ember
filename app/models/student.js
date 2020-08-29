import Model, { attr, belongsTo } from '@ember-data/model';

export default class StudentModel extends Model {
  @belongsTo('contentYear', { async: false }) contentYear;
  @attr name;
}
