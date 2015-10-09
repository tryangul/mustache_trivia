import DS from 'ember-data';

export default DS.Model.extend({
  q_difficulty_level: DS.attr(),
  q_text: DS.attr(),
  q_correct_option: DS.attr(),
  q_options_1: DS.attr(),
  q_options_2: DS.attr(),
  q_options_3: DS.attr(),
  q_options_4: DS.attr(),
  category: DS.attr(),
  answers: DS.hasMany('answer', {async:true}),
  round: DS.belongsTo('round', {async: true})
});
