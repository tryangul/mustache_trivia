import Ember from 'ember';

var randID = Math.floor(Math.random() * 1100);

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      questions: this.store.find('question', { orderBy: '_key',
                                               limitToFirst: 100,
                                               startAt: randID.toString()}),
      game: this.store.find('game', params.game_id)
    });
  },
  actions: {
    startRound: function(params) {
      var newRound = this.store.createRecord('round', params);
      newRound.save();
      params.game.save();
    }
  }
});
