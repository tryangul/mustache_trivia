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
      } else if (password.length < 6) {
        Ember.get(this, 'flashMessages').danger("Password must be longer than 6 characters");
      } else if (name.length < 1) {
        Ember.get(this, 'flashMessages').danger("Name is required");
      } else if (username.length < 6) {
        Ember.get(this, 'flashMessages').danger("Username must be more than 5 characters");
      } else if (email.length < 1){
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
