# HTTP : Version

Welcome to the hacker workshop 2! In this workshop, we will learn about HTTP Version.

There are different versions of HTTP, including:

- **HTTP/1.0**: The original version, with a simple request-response model. Each request requires a separate connection.
- **HTTP/1.1**: Introduced persistent connections, chunked transfer encoding, additional cache control mechanisms, and more efficient use of TCP connections.
- **HTTP/2**: Introduces multiplexing, header compression, and server push, improving performance and resource utilization.

## Example:
Check the HTTP version used by the server:

```js
// index.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`HTTP Version: ${req.httpVersion}\n`);
});

server.listen(3000, () => {
  console.log('Server running at http://127.0.0.1:3000/');
});
```