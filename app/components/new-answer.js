import Ember from 'ember';

export default Ember.Component.extend({

  actions:{
    saveAnswer() {
      var params = {
        smartGuy: this.get('smartGuy'),
        date: this.get('date'),
        answer: this.get('answer'),
        vote:20,
        question: this.get('question')
      };
      this.sendAction('saveAnswer', params);
    },
    upvote(answer) {
     this.sendAction('upvote', answer);
   },
   downvote(answer) {
     this.sendAction('downvote', answer);
   }
 }
});
