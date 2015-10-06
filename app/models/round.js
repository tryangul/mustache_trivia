import DS from 'ember-data';

export default DS.Model.extend({
  questions: DS.hasMany('question', {async:true})
  game: DS.belongsTo('game', {async:true})
});
