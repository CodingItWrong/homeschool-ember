import Model, { attr, belongsTo } from '@ember-data/model';

export default class ContentModel extends Model {
  @belongsTo('subject', { async: false }) subject;
  @belongsTo('contentYear', { async: false }) contentYear;
  @attr notes;
  @attr sequenceNumber;
}
