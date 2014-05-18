define([
	'core'
], function () {
	var Model = Backbone.Model.extend({
		idAttribute: 'id',
		defaults: {
			title : 'unknown',
			action: 'none',
			forUsual: true,
			forImmortal: false,
			display: true
		}
	});
	return Model;
});