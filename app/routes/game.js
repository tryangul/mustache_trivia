import Ember from 'ember';

var randID = Math.floor(Math.random() * 1100);

export default Ember.Route.extend({
  model() {
    return this.store.find('question', { orderBy: '_key',
      limitToFirst: 100,
      startAt: randID.toString()});
  },
  actions: {
    startRound: function(params) {
      var newRound = this.store.createRecord('round', params);
      newRound.save();
      params.game.save();
    }
  }
});
