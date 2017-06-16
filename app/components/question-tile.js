 import Ember from 'ember';

export default Ember.Component.extend({
  favouriteQuestions: Ember.inject.service(),
  actions: {
    update(question, params) {
    this.sendAction('update', question, params);
  },
  addToFaves(item) {
     this.get('favouriteQuestions').add(item);
   }
  }
});
