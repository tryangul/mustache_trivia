import Ember from 'ember';

export default Ember.Component.extend({
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
        console.log("Password does not match password confirmation");
      } else {
        this.sendAction("signUp", params);
      }
    }
  }
});
