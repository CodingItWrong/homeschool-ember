import Model, { attr, hasMany } from '@ember-data/model';

export default class DayModel extends Model {
  @hasMany('studentDay', { async: false }) studentDays;
  @hasMany('scheduling', { async: false }) schedulings;
  @attr('date') date;
}
