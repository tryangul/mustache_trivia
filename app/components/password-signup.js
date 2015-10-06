import Ember from 'ember';

export default Ember.Component.extend({
  signupShowing: false,

  actions: {
    signUp() {
      var params = {
        name: this.get("name"),
        username: this.get("username"),
        email: this.get("email"),
        password: this.get("password"),
        password_confirmation: this.get("password_confirmation")
      };
      if (params.password !== params.password_confirmation) {
        Ember.get(this, 'flashMessages').danger("Password does not match password confirmation");
      } else {
        this.sendAction("signUp", params);
        this.set('signupShowing', false);
      }
    },

    signIn(provider) {
      this.sendAction("signIn", provider);
    },

    showSignup() {
      this.set("signupShowing", true);
    },

    close() {
      this.set("signupShowing", false);
    }
  }
});
