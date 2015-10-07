import Ember from 'ember';

export function timeDiff(params) {
  var current = params[0];
  var a = moment(params[0])
  var b = moment(params[1])
  return a.diff(b, 'seconds')
}

export default Ember.Helper.helper(timeDiff);
