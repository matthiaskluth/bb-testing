define(['backbone', 'underscore'], function(Backbone, _) {
	return Backbone.Model.extend({
		url: "users",
		validate: function(attrs) {
			if(!attrs.firstname)
				return "Fill in the first name";
			if(!attrs.lastname)
				return "Fill in the last name";
			if(!attrs.email)
				return "Fill in the email adres"
		}
	});
});