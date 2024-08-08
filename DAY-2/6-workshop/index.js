const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/success') {
    res.statusCode = 200;
    res.end('Success\n');
  } else if (req.url === '/not-found') {
    res.statusCode = 404;
    res.end('Not Found\n');
  } else {
    res.statusCode = 500;
    res.end('Internal Server Error\n');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://127.0.0.1:3000/');
});
