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

  this.route('forms', function () {
    this.route('detail', { path: '/:form_id' });
  });

  this.route('students');
  this.route('subjects');
});
