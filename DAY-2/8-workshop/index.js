const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(301, { Location: 'https://www.digistartelkom.id' });
  res.end();
});

server.listen(3000, () => {
  console.log('Server running at http://127.0.0.1:3000/');
});
