define(['scripts/models/user', 'scripts/vendor/ristretto/ristretto'], function(User, ristretto) {
	setup(function() {
		for (var i = 0; i < 10; i++) {
			var user = new User();
			user.set({
				firstname: "Matthias" + i,
				lastname: "Kluth" + i,
				email: "matthias" + i + "@kluth.me",
				password: "abcxyz"
			});
			user.save();
		};
	});
	suite('User', function() {
		test('should exist', function() {
			ristretto.truthy(User);
		});
		test('should not validate without last name', function() {
			var user = new User();
			user.set('firstname', 'Matthias');
			var status = user.save();
			ristretto.falsey(status);

		});
		test('should not validate without last name', function() {
			var user = new User();
			user.set('lastname', 'Kluth');
			var status = user.save();
			ristretto.falsey(status);

		});
		test('should not validate without email', function() {
			var user = new User();
			user.set('firstname', 'Matthias');
			user.set('lastname', 'Kluth');
			var status = user.save();
			ristretto.falsey(status);

		});
		test('should validate with correct data', function() {
			var user = new User();
			user.set('firstname', 'Matthias');
			user.set('lastname', 'Kluth');
			user.set('email', 'matthias@kluth.me');
			user.set('password', 'abcdxyz');
			var status = user.save();
			ristretto.truthy(status);

		});
	});
});