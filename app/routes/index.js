import Ember from 'ember';
  var ref = new Firebase("https://mustachetriviaapp.firebaseio.com/");

  var error_message = ""

  var signInPassword = function(params, route) {
    ref.authWithPassword({
      email    : params.email,
      password : params.password
    }, function(error, authData) {
      if (error) {
        Ember.get(route, 'flashMessages').danger(error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
        ref.child("users").child(authData.uid).update({
          profileImageURL: authData.password.profileImageURL,
          admin: false,
          provider: authData.provider
        });
        window.location.reload();
      }
    });
  };


export default Ember.Route.extend({

  actions: {

    signUp: function(params) {
      var _this = this
      ref.createUser({
        email    : params.email,
        password : params.password
      }, function(error, userData) {
        if (error) {
          Ember.get(_this, 'flashMessages').danger(error);
        } else {
          console.log("Successfully created user account with uid:", userData.uid);
          ref.child("users").child(userData.uid).set({
            name: params.name,
            username: params.username,
            email: params.email,
            admin: false,
            createdAt: new Date(),
            editedAt: null,
            correctAnswers: null,
            wrongAnswers: null
          });
        }
        signInPassword(params);
      });
    },
    //Sign in with Facebook
    signIn: function(provider) {
      var _this = this;
      ref.onAuth(authDataCallback);
      function authDataCallback(authData) {
        if (authData) location.reload();
      }
      ref.authWithOAuthPopup("facebook", function(error, authData) {
        if (error) {
          this.set(errors, error);
          Ember.get(_this, 'flashMessages').danger(errors);
        } else {
          console.log("Authenticated successfully with payload:", authData);
          var currentUser = authData.facebook;
          ref.child("users").child(authData.uid).update({
            name: currentUser.displayName,
            email: currentUser.email,
            profileImageURL: currentUser.profileImageURL,
            admin: false,
            provider: authData.provider
          });
        }
      },
    {
      scope: "email, user_friends"
    });
    this.transitionTo('index');
  },
  //Sign in with Email and Password
    signInPassword: function(params) {
      signInPassword(params, this);
      this.transitionTo('index');
    },
  }
});
