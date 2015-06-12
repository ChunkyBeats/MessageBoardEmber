Messageboard.Answer = DS.Model.extend({
  answer: DS.attr(),
  author: DS.attr();

  answer: DS.belongsto('question', {async: true})
});
