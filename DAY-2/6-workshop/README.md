# HTTP : Status

Welcome to the hacker workshop 6! In this workshop, we will learn about HTTP Status.

HTTP status codes indicate the result of the HTTP request. Common status codes include:

- **200 OK**: The request was successful.
- **Content-Type**: Information media type of the resource being sent in the body of the HTTP.
- **301 Moved Permanently**: The resource has been moved to a new URL.
- **404 Not Found**: The requested resource could not be found.
- **500 Internal Server Error**: The server encountered an error.

## Example:
Respond with different status codes based on the URL path:

```js
// index.js
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
```