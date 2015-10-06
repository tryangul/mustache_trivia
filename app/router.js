import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('new-game', {});
  this.route('landing-page', {});
  this.route('user-profile', {});
});

export default Router;
