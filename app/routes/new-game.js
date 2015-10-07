import Ember from 'ember';

var randID = Math.floor(Math.random() * 1100);

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      users: this.store.findAll('user'),
      questions: this.store.find('question', { orderBy: '_key',
                                               limitToFirst: 100,
                                               startAt: randID.toString()})
  });

  },

  actions: {
    createGame(params) {
      var newGame = this.store.createRecord('game', params);

      newGame.save();
      params.player1.save();
      params.player2.save();
    }
  }

});
