const user = require('koa-router')();

const userService = require('./userService');

user.get('/', async (ctx, next) => {
	try {
		const users = await userService.getAllUsers();
		ctx.body = users;
	} 
	catch (err) {
		ctx.status = 400;
	};
});

user.post('/', async (ctx, next) => {
	try {
		const user = await userService.addUser(ctx.request.body);
		ctx.status = 201;
		ctx.body = user;
	} catch(err){
		ctx.status = 400;
	};
});

user.get('/:id', async (ctx, next) => {
	try {
		const user = await userService.getUserById(ctx.params.id);
		ctx.body = user;
	} catch(err){
		ctx.status = 400;
	};
});

user.put('/:id', async (ctx, next) => {
	try {
		const user = {
			name: ctx.request.body.name,
			surname: ctx.request.body.surname
		};
		await userService.editUser(ctx.params.id, user);
		ctx.status = 200;
	} catch(err){
		ctx.status = 400;
	};
});

user.delete('/:id', async (ctx, next) => {
	try {
		await userService.deleteUser(ctx.params.id);
		ctx.status = 200;
	} catch(err){
		ctx.status = 400;
	};
});

module.exports = user;
