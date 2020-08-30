import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('user', function () {
    this.route('new');
  });

  this.route('days', function () {
    this.route('detail', { path: '/:day_id' });
  });

  this.route('content-years', function () {
    this.route('detail', { path: '/:content_year_id' });
  });

  this.route('students');
  this.route('subjects');
});
