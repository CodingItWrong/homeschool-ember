import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class ContentDayModel extends Model {
  @belongsTo('contentWeek') contentWeek;
  @hasMany('content') contents;
  @attr dayOfWeek;
}
