import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    saveAnswer() {
      var params = {
        smartGuy: this.get('smartGuy'),
        date: this.get('date'),
        answer: this.get('answer'),
        question: this.get('question')
      };
      this.sendAction('saveAnswer', params);
    }
  }
});
