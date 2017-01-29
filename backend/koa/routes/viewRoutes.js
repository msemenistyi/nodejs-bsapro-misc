const router = require('koa-router')();
const users = require('../entities/users/userViewRoutes');

const initializeRoutes = () => {
	router.use('/', users.routes(), users.allowedMethods());
	router.use('/user', users.routes(), users.allowedMethods());
	return router;
}

module.exports = initializeRoutes;