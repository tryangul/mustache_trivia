import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    createGame() {
      var params = {
        creator: this.get('model'),
        user: this.get('user'),
        difficulty: this.get('difficulty'),
        time: this.get('time')
      };
      debugger;
      this.sendAction('createGame', params);
    }
  }
});
