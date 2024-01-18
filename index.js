const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // "routes.js"
const middlewares = jsonServer.defaults();
// Set default middlewares (logger, static, cors and no-cache)
const port = process.env.PORT || 8080; // local server run on given port 



server.use(middlewares);
server.use(router);

server.listen(port);