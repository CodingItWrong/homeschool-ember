import Model, { belongsTo } from '@ember-data/model';

export default class StudentDayModel extends Model {
  @belongsTo('day', { async: false }) day;
  @belongsTo('student', { async: false }) student;
  @belongsTo('contentDay', { async: false }) contentDay;
}
