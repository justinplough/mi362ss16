const http = require('http');

http.createServer( (request, response) => {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end('<html><body><h1>Hello, World!\n</h1><p>This is a node app!</p></body></html>');
}).listen(8124);

console.log('Server running at http://127.0.0.1:8124/');
