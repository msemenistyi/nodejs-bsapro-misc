const router = require('koa-router')();
const users = require('../entities/users/userAPIRoutes');

const initializeRoutes = () => {
	router.use('/api/user', users.routes(), users.allowedMethods());
	return router;
}

module.exports = initializeRoutes;