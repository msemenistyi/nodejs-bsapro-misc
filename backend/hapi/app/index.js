const path = require('path');
const Hapi = require('hapi');
const vision = require('vision');
const inert = require('inert');
const pug = require('pug');

const server = new Hapi.Server({
	connections: {
		router: {
			stripTrailingSlash: true
		}
	}
});
server.connection({ port: 7777, host: 'localhost' });

const initializeDB = require('./db/db');
initializeDB();

const viewRoutes = require('./routes/viewRoutes');
const APIroutes = require('./routes/apiRoutes');

server.register([vision, inert], (err) => {

		if (err){
			throw err;
		}

		server.views({
				engines: {
						pug: pug
				},
				relativeTo: __dirname + '/../../../',
				path: 'views'
		});

		server.route({
				method: 'GET',
				path: '/{param*}',
				handler: {
						directory: {
								path: 'public'
						}
				}
		});

		server.route(viewRoutes);
		server.route(APIroutes);

		server.start((err) => {

				if (err) {
						throw err;
				}
				console.log(`Server running at: ${server.info.uri}`);
		});

});