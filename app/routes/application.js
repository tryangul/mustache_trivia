import Ember from 'ember';

  var ref = new Firebase("https://mustachetrivia.firebaseio.com/");

  var signInPassword = function(params) {
    ref.authWithPassword({
      email    : params.email,
      password : params.password
    }, function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
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
  beforeModel: function() {
    return this.get("session").fetch().catch(function() {});
  },


  actions: {
    signUp: function(params) {
      ref.createUser({
        email    : params.email,
        password : params.password
      }, function(error, userData) {
        if (error) {
          console.log("Error creating user:", error);
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
      ref.onAuth(authDataCallback);
      function authDataCallback(authData) {
        if (authData) {
          console.log("User " + authData.uid + " is logged in with " + authData.provider);
          location.reload();
        } else {
          console.log("User is logged out");
        }
      }
      ref.authWithOAuthPopup("facebook", function(error, authData) {
          if (error) {
            console.log("Login Failed!", error);
            this.set(errors, error);
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
      signInPassword(params);
      this.transitionTo('index');
    },

    signOut: function() {
      this.get("session").close();
    },
  }
});
