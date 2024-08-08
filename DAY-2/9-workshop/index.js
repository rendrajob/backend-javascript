const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Set-Cookie', 'name=Digistar-Class; HttpOnly');
  res.end('Cookie set\n');
});

server.listen(3000, () => {
  console.log('Server running at http://127.0.0.1:3000/');
});