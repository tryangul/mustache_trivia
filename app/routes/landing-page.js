import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var currentUser = this.get("session.uid")
    return this.store.findRecord('user', currentUser)
  },
  actions: {
    randomID: function() {
      randID = Math.floor(Math.random() * 1100).to_s;
      return randID;
    }
  }
});
