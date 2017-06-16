import Ember from 'ember';

export function yesAnswer(params) {
  var question = params[0];


    if (question.get('answers').get('length') >= 0 ){
    return Ember.String.htmlSafe('<button class="btn btn-success">answers.length></button>');
  }
}

export default Ember.Helper.helper(yesAnswer);
