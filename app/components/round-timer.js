import Ember from 'ember';


export default Ember.Component.extend({

  currentTime: function() {
    var date = new Date();
    return date.toString();
  }.property('currentTimePulse'),

  currentTimeMetronome: function(interval) {
    interval = interval || 1000;
    Ember.run.later(this, function() {
      this.notifyPropertyChange('currentTimePulse');
      this.currentTimeMetronome();
    }, interval);
  }.on('didInsertElement'),

  startTime: function() {
    var start = new Date();
    return start.toString();
  }.property('startTimer'),

  roundTime: function(interval) {
    // set roundTime to number specified by round time
    // divide interval by 1000 to get seconds
    var roundTime = 30;
    return roundTime.toString();
  }.property('roundTimer'),

  runAction: function(interval) {
    var _this = this;
    Ember.run.later(function() {
      _this.set(game, 'bunker');
    }, 15000);
  }.on('didInsertElement'),
});
