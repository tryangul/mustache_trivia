import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var currentUserID = this.get('session.uid');
    return this.store.findRecord('user', currentUserID); 

  },

  actions: {
    createGame(params) {
      var newGame = this.store.createRecord('game', params);

      newGame.save().then(
        function() {
          params.user.save();
        });
      this.transitionTo('game', newGame.id)
    }
  }

});
