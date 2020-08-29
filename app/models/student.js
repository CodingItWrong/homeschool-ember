import Model, { attr, belongsTo } from '@ember-data/model';

export default class StudentModel extends Model {
  @belongsTo('form', { async: false }) form;
  @attr name;
}
