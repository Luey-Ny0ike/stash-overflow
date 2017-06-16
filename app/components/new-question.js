import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion:false,
  actions:{
    questionFormShow(){
      this.set('addNewQuestion', true);
    },
    saveQuestion1(){
      var params ={
        author: this.get('author'),
        date: this.get('date'),
        title: this.get('title'),
        image: this.get('image'),
        question: this.get('question')
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion2', params)
    }
  }
});
