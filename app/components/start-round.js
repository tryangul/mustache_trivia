import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    startRound: function() {
      var params = {
        questions: this.get('questions'),
        game: this.get('game')
      }
    }
  }
});
