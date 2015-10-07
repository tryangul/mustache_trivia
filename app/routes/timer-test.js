import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var currentUser = this.get('session.uid');
    return this.store.findRecord('user', currentUser)
  }

});
