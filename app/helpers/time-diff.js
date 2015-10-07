import Ember from 'ember';

export function timeDiff(date1, date2, format, options) {
  return date1 - (date2, format);
}

export default Ember.Helper.helper(timeDiff);
