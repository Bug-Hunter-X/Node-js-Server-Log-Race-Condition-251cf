const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});
//This version ensures that the 'Server is running on port 8080' message is only printed after the server has successfully started listening on port 8080.  The callback function provided to server.listen is executed once the server is ready.