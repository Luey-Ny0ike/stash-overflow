import DS from 'ember-data';

export default DS.Model.extend({
author:DS.attr(),
date:DS.attr(),
question:DS.attr(),
answers:DS.hasMany('question', { async: true}),
});
