import Ember from 'ember';

export default Ember.Component.extend({
  loginShowing: false,
  
  actions: {
    signInPassword() {
      var params = {
        email: this.get("email"),
        password: this.get("password"),
      };
      this.sendAction("signInPassword", params);
    },

    showLogin() {
      this.set("loginShowing", true);
    },

    close() {
      this.set("loginShowing", false);
    }
  }
});
