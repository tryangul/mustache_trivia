import Ember from 'ember';


export default Ember.Component.extend({
  gameMessage: "",

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
    var gamesRef = new Firebase("https://mustachetriviaapp.firebaseio.com/games");
    var usersRef = new Firebase("https://mustachetriviaapp.firebaseio.com/users");
    var game_id = this.get('model.game.id')
    var gameUsers = this.get('model.game.users')
    var user = this.get('model.user')
    var user_id = this.get('model.user.id')
    var finished_users = []
    interval = (parseInt(this.get('model.game.time')))*1000
    var _this = this;
    Ember.run.later(function() {
       usersRef.child(user_id).update({
         currentTurnComplete: true
       });
       gameUsers.forEach(function(user) {
         if (user.currentTurnComplete === true) {
           finished_users.push("user");
         }
       })
       if (finished_users.length > 1) {
         gamesRef.child(game_id).update({
           is_over: true
         });
       }
       _this.set('gameMessage', 'Your turn is over!')
    }, interval);
  }.on('didInsertElement'),
});
