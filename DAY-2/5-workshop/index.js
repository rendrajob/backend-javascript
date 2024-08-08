const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(parsedUrl));
});

server.listen(3000, () => {
  console.log('Server running at http://127.0.0.1:3000/');
});
