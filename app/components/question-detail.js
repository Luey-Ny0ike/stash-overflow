import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(question){
      if(confirm('Are sure you want to delete this question?')){
        this.sendAction('destroyQuestion', question);
      }
  }
}
});
