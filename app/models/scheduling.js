import Model, { belongsTo } from '@ember-data/model';

export default class SchedulingModel extends Model {
  @belongsTo('day', { async: false }) day;
  @belongsTo('content', { async: false }) content;
}
