Messageboard.AnswerController = Ember.Controller.extend({
  actions: {
    deleteanswer: function() {
      if(confirm('Are You Sure?')){
        this.get('model').destroyRecord();
        this.transitionToRoute('question');
      }
    }
  }
})
