/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	
	findUsersNamedEdik: function(req, res, next) {
		UserService.findUsersNamedEdik()
			.then((ediks) => {
				res.send(ediks)
			})
			.catch(() => {
				res.sendStatus(400);
			});
	}

};

