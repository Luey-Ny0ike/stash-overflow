 import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(question, params) {
    this.sendAction('update', question, params);
  },
  addToFaves(item) {
     this.get('favouriteQuestions').add(item);
   }
  }
});
