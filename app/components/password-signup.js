import Ember from 'ember';

export default Ember.Component.extend({
  signupShowing: false,

  actions: {
    signUp() {
      var params = {
        username: this.get("username"),
        email: this.get("email"),
        password: this.get("password"),
      };
      debugger;
      if (params.password.length < 6) {
        Ember.get(this, 'flashMessages').danger("Password must be longer than 6 characters");
      } else if (params.username.length < 6) {
        Ember.get(this, 'flashMessages').danger("Username must be more than 5 characters");
      } else if (params.email.length < 1){
        Ember.get(this, 'flashMessages').danger("Email is required");
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
