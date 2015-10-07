import Ember from 'ember';



export default Ember.Component.extend({
  //  testvalue: 'hollywood',
   //
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

    roundTime: function() {
      // set roundTime to number specified by round time
      var roundTime = 60;
      return roundTime.toString();
    }.property('roundTimer'),

    testing: function() {
      var _this = this
      Ember.run.later(this, function() {
        _this.set('testvalue', 'bunker');
      }, 10000);
    }.observes('testvalue'),

    //new stuff

    init: function() {
      // Update the time.
      this.set('localTime', 'bunker');
    },

    // updateTime: function() {
    //   var _this = this;
    //
    //   // Update the time every second.
    //   Ember.run.later(function() {
    //     _this.set('localTime', new Date().toLocaleTimeString());
    //     _this.updateTime();
    //   }, 1000);
    // },

    localTime: new Date().toLocaleTimeString()


});
