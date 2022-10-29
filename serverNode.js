const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./server/goods.json');
const middlewares = jsonServer.defaults({
	static: './builde',
});

const PORT = process.env.PORT || 3050;

server.use(middlewares);
server.use(router);

server.listen(PORT, () => {
	console.log('Server is running');
});
