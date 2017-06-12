import Ember from 'ember';

export default Ember.Component.extend({
  model(){
      return this.store.findRecord('answer')
  },
  actions: {
    delete(question){
      if(confirm('Are sure you want to delete this question?')){
        this.sendAction('destroyQuestion', question);
      }
  },
  destroyAnswer(answer){
    this.sendAction('destroyAnswer', answer);
  }
}
});
