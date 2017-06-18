import Ember from 'ember';

export default Ember.Route.extend({
    favouriteQuestions: Ember.inject.service(),
  model() {
    return Ember.RSVP.hash({
    questions: this.store.findAll('question'),
    answers: this.store.findAll('answer')
  });
  },
  actions:{
    saveQuestion3(params){
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    },
    addToFaves(item) {
       this.get('favouriteQuestions').add(item);
     }


  }
});
