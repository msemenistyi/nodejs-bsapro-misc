const userService = require('./userService');
const userPrefix = '/api/user';

module.exports = [{ 
	method: 'GET', 
	path: userPrefix, 
	handler: (request, reply) => {
		userService.getAllUsers().then((users) => {
			reply(users);
		}).catch((err) => {
			reply().code(400);
		});
	}
}, { 
	method: 'POST', 
	path: userPrefix, 
	handler: (request, reply) => {
		userService.addUser(request.payload).then((user) => {
			console.log(user);
			reply(user).code(201);
		}).catch((err) => {
			reply().code(400);
		});
	}
}, { 
	method: 'GET', 
	path: userPrefix + '/{id}', 
	handler: (request, reply) => {
		userService.getUserById(request.params.id).then((user) => {
			reply(user);
		}).catch((err) => {
			reply().code(400);
		});
	}
}, { 
	method: 'PUT', 
	path: userPrefix + '/{id}', 
	handler: (request, reply) => {
		userService.editUser(request.params.id, request.payload).then(() => {
			reply();
		}).catch((err) => {
			reply().code(400);
		});
	}
}, { 
	method: 'DELETE', 
	path: userPrefix + '/{id}', 
	handler: (request, reply) => {
		userService.deleteUser(request.params.id).then(() => {
			reply().code(200);
		}).catch((err) => {
			reply().code(400);
		});
	}
}];
