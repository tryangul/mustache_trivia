import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['answerRatio:desc'],
  UsersByRank: Ember.computed.sort('model', 'sortBy')
});
