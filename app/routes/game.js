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
    },

    newAnswer: function(params) {
      var newAnswer = this.store.createRecord('answer', params);
        newAnswer.save().catch(e => {
          console.log(e.errors);
        });;
        params.user.save().catch(e => {
          console.log(e.errors);
        });;
        params.round.save();
        params.question.save()
        .catch(e => {
          console.log(e.errors);
        });
    }
  }
});
