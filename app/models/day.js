import Model, { attr, hasMany } from '@ember-data/model';

export default class DayModel extends Model {
  @attr('date') date;
  @hasMany('scheduling', { async: false }) schedulings;
}
