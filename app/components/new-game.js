import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    createGame(model) {
      var params = {
        user: model,
        difficulty: this.get('difficulty'),
        time: this.get('time'),
        is_over: false,
        correctAnswers: 0,
        incorrectAnswers: 0
      };
      debugger;
      this.sendAction('createGame', params);
    }
  }
});
