import Ember from 'ember';

export function timeDiff(params) {
  var currentTime = moment(params[0]);
  var startTime = moment(params[1]);
  var roundTime = params[2];
  var elapsedTime = currentTime.diff(startTime, 'seconds');
  return (roundTime - elapsedTime)
}

export default Ember.Helper.helper(timeDiff);
