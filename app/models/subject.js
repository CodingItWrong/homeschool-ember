import Model, { attr, hasMany } from '@ember-data/model';

export default class SubjectModel extends Model {
  @attr name;
  @hasMany('content', { async: false }) contents;
}
