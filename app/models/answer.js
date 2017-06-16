import DS from 'ember-data';

export default DS.Model.extend({
smartGuy: DS.attr(),
datee: DS.attr(),
answer:DS.attr(),
question:DS.belongsTo('question', {async: true}),
});
