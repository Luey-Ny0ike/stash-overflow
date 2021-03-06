import DS from 'ember-data';

export default DS.Model.extend({
author:DS.attr(),
date:DS.attr(),
title:DS.attr(),
image:DS.attr(),
question:DS.attr(),
answers:DS.hasMany('answer', { async: true}),
});
