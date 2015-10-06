import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var currentUser = this.get("session.uid")
    return this.store.findRecord('user', currentUser)
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
