import Ember from 'ember';

export function timeDiff(params) {
  var currentTime = moment(params[0]);
  var startTime = moment(params[1]);
  var roundTime = params[2];
  var elapsedTime = currentTime.diff(startTime, 'seconds');
  var remainingTime = (roundTime - elapsedTime)
  if (remainingTime > 0) {
    return remainingTime;
  } else {
    return 0
  }
}

export default Ember.Helper.helper(timeDiff);
