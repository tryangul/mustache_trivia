import Ember from 'ember';

export default Ember.Route.extend({

  setupController: function(controller, model){
    this._super(controller, model);
    this.startWatchingTime(controller);
  },
  startWatchingTime: function(controller){
    var self = this;
    controller.set('currentTime', moment());
    Em.run.later(function(){
      self.startWatchingTime(controller);
    }, 1000);
  },

  beforeModel: function() {
    return this.get("session").fetch().catch(function() {});
  },

  actions: {
    signOut: function() {
      this.get("session").close();
      this.transitionTo('index');
    },
  }
});
