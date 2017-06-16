import Ember from 'ember';

export function yesAnswer(params) {
  var question = params[0];
  var urefu = question.get('answers').get('length');


    if (question.get('answers').get('length') > 0 ){
    return Ember.String.htmlSafe('<button class="btn btn-success">'+ urefu +' answer </button>');
  }
}

export default Ember.Helper.helper(yesAnswer);
