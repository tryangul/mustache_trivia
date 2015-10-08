import Ember from 'ember';

var randID = Math.floor(Math.random() * 1901);

export default Ember.Route.extend({
  model(params) {
    var userId = this.get('session.uid');
    return Ember.RSVP.hash({
      questions: this.store.find('question', { orderBy: '_key',
                                               limitToFirst: 100,
                                               startAt: randID.toString()}),
      game: this.store.find('game', params.game_id),
      user: this.store.find('user', userId)
    });
  },

  actions: {
    startRound: function(params) {
      var newRound = this.store.createRecord('round', params);
      newRound.save();
      params.game.save();
      params.user.save();
    },

    newAnswer: function(params, game) {
      var newAnswer = this.store.createRecord('answer', params, game);
      newAnswer.save();
      params.user.save().catch(e => {
        console.log(e.errors);
      });
      params.round.save();

      // debugger;
      if (newAnswer.get('option') === newAnswer.get('question.q_correct_option')) {
        game.incrementProperty('correctAnswers');
        params.user.incrementProperty('correctAnswers');
        params.user.save();
        game.save();
      } else {
        game.incrementProperty('incorrectAnswers');
        params.user.incrementProperty('incorrectAnswers');
        params.user.save();
        game.save();
      }
    },

    roundEnded: function(game_id) {
      this.transitionTo('game-results', game_id);
    }

  }
});
