import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    createGame() {
      var params = {
        player1: this.get('session.uid'),
        player2: this.get('user'),
        difficulty: this.get('difficulty'),
        time: this.get('time')
      };
      debugger;
      this.sendAction('createGame', params);
    }
  }
});
