import DS from 'ember-data';

export default DS.Model.extend({
  users: DS.hasMany('user', {async:true}),
  rounds: DS.hasMany('round', {async:true}),
  difficulty: DS.attr(),
  time: DS.attr(),
  is_over: DS.attr()
});
