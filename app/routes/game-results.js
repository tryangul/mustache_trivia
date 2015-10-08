import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var userId = this.get('session.uid');
    return Ember.RSVP.hash({
      game: this.store.find('game', params.game_id),
      user: this.store.find('user', userId)
    });
  },
  
});
