import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr(),
  profileImageURL: DS.attr(),
  name: DS.attr(),
  username: DS.attr(),
  provider: DS.attr(),
  correctAnswers: DS.attr(),
  wrongAnswers: DS.attr()

});
