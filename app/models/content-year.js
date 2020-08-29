import Model, { attr, hasMany } from '@ember-data/model';

export default class ContentYearModel extends Model {
  @hasMany('subject', { async: false }) subjects;
  @hasMany('content', { async: false }) contents;
  @attr name;
}
