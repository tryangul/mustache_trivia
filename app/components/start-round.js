import Ember from 'ember';

var i = 1;

export default Ember.Component.extend({
  showGameForm: false,
  counterInitialized: false,
  questionArray: "",


  actions: {
    startRound: function() {
      var params = {
              questions: this.get('model.questions'),
              game: this.get('model.game'),
              is_over: false
      }
      this.sendAction('startRound', params);
      this.set('showGameForm', true);
      this.set('counterInitialized', true);
      var questionBody = this.get('model.questions').get('firstObject.question');
      var questionCategory = this.get('model.questions').get('firstObject.category');

      $('.questionBody').text(questionBody);
      $('.questionCategory').text(questionCategory);
    },
    nextQuestion: function() {
      // creates new answer for database
      var prevQuestion = this.get('model.questions').objectAt(i-1);
      var params = {
        body: this.get('answer'),
        user: this.get('model.user'),
        question: prevQuestion,
        round: this.get('model.game.rounds').get('firstObject')
      }
      this.sendAction('newAnswer', params);

      //increments through questions
      if (i < 99) {
      var nextQuestion = this.get('model.questions').objectAt(i);
        ++i;
        $('.questionBody').text(nextQuestion.get('question')).fadeIn();
        $('.questionCategory').text(nextQuestion.get('category')).fadeIn();
      } else {
        $('.questionCategory').text('What a Beast!!');
        $('.questionBody').text('No More Questions This Round.');
      }
    }
  }
});
