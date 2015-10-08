import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user', {async:true}),
  rounds: DS.hasMany('round', {async:true}),
  difficulty: DS.attr(),
  time: DS.attr(),
  is_over: DS.attr(),
  correctAnswers: DS.attr('number'),
  incorrectAnswers: DS.attr('number')
});
