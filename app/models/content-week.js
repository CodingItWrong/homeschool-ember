import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class ContentWeekModel extends Model {
  @belongsTo('contentYear') contentYear;
  @hasMany('contentDay') contentDays;
  @attr number;
}
