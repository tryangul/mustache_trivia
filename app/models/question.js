import DS from 'ember-data';

export default DS.Model.extend({
  value: DS.attr(),
  question: DS.attr(),
  answer: DS.attr(),
  air_date: DS.attr(),
  category: DS.attr(),
  answers: DS.hasMany('answer', {async:true}),
  round: DS.belongsTo('round', {async: true})
});
