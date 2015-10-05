import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    signInPassword() {
      var params = {
        email: this.get("email"),
        password: this.get("password"),
      };
      this.sendAction("signInPassword", params);
    }
  }
});
