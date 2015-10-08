import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    createGame(model) {
      var params = {
        player1: model.player1,
        player2: this.get('user'),
        difficulty: this.get('difficulty'),
        time: this.get('time'),
        is_over: false
      };
      this.sendAction('createGame', params);
    }
  }
});
