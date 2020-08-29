import Model, { attr, hasMany } from '@ember-data/model';

export default class FormModel extends Model {
  @hasMany('content', { async: false }) contents;
  @attr number;
}
