# HTTP : Redirect

Welcome to the hacker workshop 8! In this workshop, we will learn about HTTP Redirect.

An HTTP redirect directs the client to a different URL. Common status codes for redirects include:

- **301 Moved Permanently**: The resource has been permanently moved to a new URL.
- **302 Found**: The resource has temporarily moved to a new URL.
- **307 Temporary Redirect**: The resource has temporarily moved, but the request method should not change.

## Example:
Redirect to another URL:

```js
// index.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(301, { Location: 'https://www.digistartelkom.id' });
  res.end();
});

server.listen(3000, () => {
  console.log('Server running at http://127.0.0.1:3000/');
});
```