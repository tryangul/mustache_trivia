import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr(),
  profileImageURL: DS.attr(),
  username: DS.attr(),
  provider: DS.attr(),
  answers: DS.hasMany('answer', {async:true}),
  correctAnswers: DS.attr('number'),
  incorrectAnswers: DS.attr('number'),
  games: DS.hasMany('games', { async: true }),
  currentTurnComplete: DS.attr(),
  totalAnswers: Ember.computed('correctAnswers', 'incorrectAnswers', function(key, value) {
    var correctAnswers = this.get('correctAnswers') || 0;
    var incorrectAnswers = this.get('incorrectAnswers') || 0;
    return correctAnswers + incorrectAnswers;
  }),
  totalGames: Ember.computed('games', function(key, value) {
    var games = this.get('games').get('length') || 0;
    return games;
  }),
  answerRatio: Ember.computed('incorrectAnswers', 'correctAnswers', function(key, value) {
    var correctAnswers = this.get('correctAnswers') || 0;
    var incorrectAnswers = this.get('incorrectAnswers') || 0;
    var totalAnswers = correctAnswers + incorrectAnswers || 0;
    var answerRatio = (correctAnswers / totalAnswers * 100).toFixed(2);
    if (isNaN(answerRatio)) {
      return 0;
    } else {
      return answerRatio;
    }
  }),
  answersPerMinute: Ember.computed('games.@each.time', function(key, value) {
    var totalGames = this.get('games.length');
    var totalAnswers = this.get('totalAnswers');
    var totalGameTime = 0;
    this.get('games').forEach(function(game) {
      if (game.get('incorrectAnswers') != 0 && game.get('correctAnswers') != 0) {
      totalGameTime += game.get('time');
    }
    })

    return (totalAnswers / totalGameTime * 60).toFixed(1);
  })
});
