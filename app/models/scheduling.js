import Model, { attr, belongsTo } from '@ember-data/model';

export default class SchedulingModel extends Model {
  @belongsTo('day', { async: false }) day;
  @belongsTo('student', { async: false }) student;
  @belongsTo('content', { async: false }) content;
  @attr complete;
}
