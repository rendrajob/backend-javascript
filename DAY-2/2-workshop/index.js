const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`HTTP Version: ${req.httpVersion}\n`);
});

server.listen(3000, () => {
  console.log('Server running at http://127.0.0.1:3000/');
});
