const user = require('koa-router')();

const userService = require('./userService');

user.get('', async (ctx, next) => {
	await ctx.render('users');
});

user.get(':id', async (ctx, next) => {
	try {
		const user = await userService.getUserById(req.params.id);
		ctx.render('user', {user: user});
	} catch(err) {
		ctx.status = 400;
	};
});

module.exports = user;
