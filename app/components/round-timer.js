import Ember from 'ember';


export default Ember.Component.extend({
  testing: 'andrew',

  currentTime: function() {
    var date = new Date();
    return date.toString();
  }.property('currentTimePulse'),

  currentTimeMetronome: function(interval) {
    Ember.run.later(this, function() {
      this.notifyPropertyChange('currentTimePulse');
      this.currentTimeMetronome();
    }, 1000);
  }.on('didInsertElement'),

  startTime: function() {
    var start = new Date();
    return start.toString();
  }.property('startTimer'),

  roundTime: function(interval) {
    interval = this.get('model.game.time')
    return interval.toString();
  }.property('roundTimer'),

  runAction: function(interval) {
    interval = (parseInt(this.get('model.game.time')))*1000
    var _this = this;
    Ember.run.later(function() {
      _this.set('testing', 'bunker');
    }, interval);
  }.on('didInsertElement'),
});
