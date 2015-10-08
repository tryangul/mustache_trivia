import Ember from 'ember';

var i = 1;

export default Ember.Component.extend({
  showGameForm: false,
  counterInitialized: false,
  questionArray: "",
  gameMessage: "",
  roundBeginning: true,
  option1: "foo",
  option2: "",
  option3: "",
  option4: "",
  actions: {
    startRound: function(questions) {
      var params = {
              questions: questions,
              game: this.get('model.game'),
              is_over: false
      };
      this.sendAction('startRound', params);
      this.set('showGameForm', true);
      this.set('counterInitialized', true);
      var firstQuestion = questions.get('firstObject');
      var questionBody = questions.get('firstObject.q_text');
      $('.option1').text(questions.get('firstObject.q_options_1'));
      $('.option2').text(questions.get('firstObject.q_options_2'));
      $('.option3').text(questions.get('firstObject.q_options_3'));
      $('.option4').text(questions.get('firstObject.q_options_4'));
      // debugger;
      $('.questionBody').text(questionBody);

      // $('.option1').text(firstQuestion.get('q_options_1'));
      // $('.option2').text(firstQuestion.get('q_options_2'));
      // $('.option3').text(firstQuestion.get('q_options_3'));
      // $('.option4').text(firstQuestion.get('q_options_4'));
      this.set('roundBeginning', false);

      $('.submit-answer-button').show();
    },
    nextQuestion: function(value) {
      // creates new answer for database
      var prevQuestion = this.get('model.questions').objectAt(i-1);
      var params = {
        option: value,
        user: this.get('model.user'),
        question: prevQuestion,
        round: this.get('model.game.rounds').get('firstObject')
      }
      var game = this.get('model.game');
      this.sendAction('newAnswer', params, game);

      //increments through questions
      if (i < 99) {
      var nextQuestion = this.get('model.questions').objectAt(i);
        ++i;
        $('.questionBody').text(nextQuestion.get('q_text')).fadeIn();
        $('.questionCategory').text(nextQuestion.get('q_category_id')).fadeIn();
        $('.option1').text(nextQuestion.get('q_options_1'));
        $('.option2').text(nextQuestion.get('q_options_2'));
        $('.option3').text(nextQuestion.get('q_options_3'));
        $('.option4').text(nextQuestion.get('q_options_4'));
      } else {
        $('.questionCategory').text('What a Beast!!');
        $('.questionBody').text('No More Questions This Round.');
      }
    },

    roundOver: function(game_id) {
      this.set('showGameForm', false);
      this.set('gameMessage', "Your turn is over!");
      this.sendAction('roundEnded', game_id)
    }
  }
});
