import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('user');
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
