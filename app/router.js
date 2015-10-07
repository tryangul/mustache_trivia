import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('new-game', {});
  this.route('landing-page', {});
  this.route('profile', {path: '/users/:user_id'});
  this.route('timer_test', {});
});

export default Router;
