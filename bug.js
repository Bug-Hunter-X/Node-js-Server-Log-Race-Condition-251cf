const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080);
console.log('Server is running on port 8080');
//The issue is that if the server is terminated abruptly, the log message 'Server is running on port 8080' will be printed before the server actually starts listening on port 8080, resulting in a potential race condition. This can lead to unexpected behavior, especially if the server is trying to access other resources or databases immediately after starting.