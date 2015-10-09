import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user', {async:true}),
  rounds: DS.hasMany('round', {async:true}),
  difficulty: DS.attr(),
  time: DS.attr(),
  is_over: DS.attr(),
  correctAnswers: DS.attr('number'),
  incorrectAnswers: DS.attr('number'),
  answersPerMinute: Ember.computed('correctAnswers', 'incorrectAnswers', 'time', function(key, value) {
    var totalAnswers = this.get('correctAnswers') + this.get('incorrectAnswers');
    var time = this.get('time');
    return (totalAnswers / time * 60).toFixed(2);
  })
});
