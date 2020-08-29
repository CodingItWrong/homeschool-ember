import Model, { attr, belongsTo } from '@ember-data/model';

export default class ContentModel extends Model {
  @belongsTo('subject', { async: false }) subject;
  @belongsTo('form', { async: false }) form;
  @attr notes;
  @attr sequenceNumber;
}
