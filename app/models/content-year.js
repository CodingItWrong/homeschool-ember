import Model, { attr, hasMany } from '@ember-data/model';

export default class ContentYearModel extends Model {
  @hasMany('content', { async: false }) contents;
  @attr name;
}
