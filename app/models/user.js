import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr(),
  profileImageURL: DS.attr(),
  name: DS.attr(),
  username: DS.attr(),
  provider: DS.attr(),
  answers: DS.hasMany('answer', {async:true}),
  // correctAnswers: DS.attr(),
  // wrongAnswers: DS.attr(),
  // gameScore: null,
  // wins: DS.attr(),
  // losses: DS.attr(),
  games: DS.hasMany('games', {aysnc: true}),
  currentTurnComplete: DS.attr()
});
