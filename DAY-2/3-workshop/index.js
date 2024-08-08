const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  switch (req.method) {
    case 'GET':
      res.end('Received a GET request\n');
      break;
    case 'POST':
      res.end('Received a POST request\n');
      break;
    case 'PUT':
      res.end('Received a PUT request\n');
      break;
    case 'DELETE':
      res.end('Received a DELETE request\n');
      break;
    default:
      res.end('Received an unknown request\n');
      break;
  }
});

server.listen(3000, () => {
  console.log('Server running at http://127.0.0.1:3000/');
});
