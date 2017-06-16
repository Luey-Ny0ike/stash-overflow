import Ember from 'ember';

export function qWithA(params) {
  var question = params[0];

  if (question.get('answers').get('length') === 0) {
    return Ember.String.htmlSafe('<button class="btn btn-danger">0 Answers</button>');
  }
}

export default Ember.Helper.helper(qWithA);
