const http = require("http");

const routes = require("./clean_code");

const server = http.createServer(routes);

server.listen(3000);
