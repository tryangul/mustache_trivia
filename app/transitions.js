export default function(){
  this.transition(
    this.hasClass('formShowing'),

    this.toValue(true),
    this.use('crossFade', {duration: 1000}),

    this.reverse('crossFade', {duration: 1000})
  );

  this.transition(
    this.toRoute(['profile', 'index', 'landing-page', 'new-game']),
    this.use('crossFade', {duration:1000})
  );

  this.transition(
    this.hasClass(['questionCategory', 'questionBody']),
    this.use('toLeft', {duration: 1000}),

    this.reverse('toRight', {duration: 1000})
  );
};
