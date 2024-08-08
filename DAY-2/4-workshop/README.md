# HTTP : URL

Welcome to the hacker workshop 4! In this workshop, we will learn about HTTP URL.

The URL (Uniform Resource Locator) specifies the location of the resource on the server. It includes:

- **Scheme**: The protocol (e.g., `http`, `https`).
- **Host**: The server address (e.g., `www.digistar.com`).
- **Port**: The server port (optional, e.g., `:3000`).
- **Path**: The resource path (e.g., `/index.html`).
- **Query String**: Additional parameters (e.g., `?id=123`).
- **Fragment**: A reference to a part of the resource (e.g., `#section1`).

## Example:
Parse URL and query parameters:

```js
// index.js
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
```