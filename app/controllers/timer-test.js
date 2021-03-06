import Ember from 'ember';

export default Ember.Controller.extend({
  testing: 'hollywood',

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
  }.on('init'),

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

  init: function() {
    this.runAction();
  },

  runAction: function(interval) {
    var _this = this;
    Ember.run.later(function() {
      _this.set('testing', 'bunker');
    }, 15000);
  },

});
