import Ember from 'ember';

export default Ember.Component.extend({
  showGameForm: false,
  counterInitialized: false,
  questionArray: "",

  actions: {
    startRound: function() {
      var params = {
              questions: this.get('questions'),
              game: this.get('game')
      }
      this.sendAction('startRound', params);
      this.set('showGameForm', true);
      this.set('counterInitialized', true);
      var questionBody = this.get('questions').get('firstObject.question');
      var questionCategory = this.get('questions').get('firstObject.category');

      $('.questionBody').text(questionBody);
      $('.questionCategory').text(questionCategory);
    }
  }
});
