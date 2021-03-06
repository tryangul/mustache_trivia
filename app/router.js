import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('new-game', { path: '/games/new'});
  this.route('landing-page', { path: '/welcome'});
  this.route('profile', {path: '/users/:user_id'});
  this.route('timer_test', {});
  this.route('game', {path: '/games/:game_id'});
  this.route('game-results', {path: '/games/:game_id/results'});
  this.route('scoreboard', {});
});

export default Router;
