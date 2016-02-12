const http = require('http');

http.createServer( (request, response) => {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end('<html><body><h1>Hello, World!</h1></body></html>');
}).listen(8124);

console.log('Server running at http://127.0.0.1:8124/');
