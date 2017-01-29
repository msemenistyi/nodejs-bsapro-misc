const Koa = require('koa');
const app = new Koa();

const koa = require('koa-router')();
const logger = require('koa-logger');
const views = require('koa-views');
const convert = require('koa-convert');
const bodyParser = require('koa-bodyparser');
const static = require('koa-static');

const initializeViewRoutes = require('./routes/viewRoutes');
const initializeAPIRoutes = require('./routes/apiRoutes');

const initializeDB = require('./db/db');
initializeDB();

// global middlewares
app.use(views(__dirname + '/../../views', {
  extension: 'pug'
}));

app.use(bodyParser());
app.use(convert(logger()));
app.use(static(__dirname + '/../../public'));

// logger
app.use(async (ctx, next) => {
	const start = new Date();
	await next();
	const ms = new Date() - start;
	console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// routes definition
const viewRoutes = initializeViewRoutes();
app.use(viewRoutes.routes(), viewRoutes.allowedMethods());

const apiRoutes = initializeAPIRoutes();
app.use(apiRoutes.routes(), apiRoutes.allowedMethods());

app.on('error', function(err, ctx){
	logger.error('server error', err, ctx);
});

module.exports = app;