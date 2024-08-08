# HTTP : Stateless

Welcome to the hacker workshop 1! In this workshop, we will learn about HTTP Stateless.

HTTP is a stateless protocol, meaning each request from a client to a server is treated as an independent transaction that is unrelated to any previous request. The server does not retain any information about previous requests. This design simplifies server design but requires clients to send necessary state information with each request if needed.



## Example:
Create a simple server using Node.js that responds to HTTP requests:

```js
// index.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, Digistar!\n');
});

server.listen(3000, () => {
  console.log('Server running at http://127.0.0.1:3000/');
});
```