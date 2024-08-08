const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      res.setHeader('Content-Type', 'application/json');
      res.end(body);
    });
  } else {
    res.statusCode = 405;
    res.end('Only POST method is allowed\n');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://127.0.0.1:3000/');
});
