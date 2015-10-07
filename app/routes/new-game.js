import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var currentUserID = this.get('session.uid');
    return Ember.RSVP.hash({
      player1: this.store.findRecord('user', currentUserID),
      users: this.store.findAll('user')
  });

  },

  actions: {
    createGame(params) {
      params.users = [];
      params.users.push(params.player1);
      params.users.push(params.player2);
      var newGame = this.store.createRecord('game', params);

      newGame.save().then(
        function() {
          params.player1.save();
          params.player2.save();
        });
      this.transitionTo('game', newGame.id)
    }
  }

});
