const userService = require('./userService');

module.exports = [{
	method: 'GET',
	path: '/',
	handler: function (request, reply) {
		reply.view('users');
	}
}];