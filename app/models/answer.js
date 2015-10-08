import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user', {async: true}),
  round: DS.belongsTo('round', {async: true}),
  question: DS.belongsTo('question', {async: true}),
  option: DS.attr('number')
});
