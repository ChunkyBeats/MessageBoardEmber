Messageboard.AnswerController = Ember.Controller.extend({
  needs: ['question'],
  actions: {
    deleteanswer: function() {
      if(confirm('Are You Sure?')){
        var question = this.get('controllers.question.model');
        this.get('model').destroyRecord();
        question.save();
        this.transitionToRoute('questions');
      }
    }
  }
});
