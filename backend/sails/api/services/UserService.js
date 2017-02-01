module.exports = {

	findUsersNamedEdik: () => {
		return User.find({
			name: 'edik'
		});
	}

};