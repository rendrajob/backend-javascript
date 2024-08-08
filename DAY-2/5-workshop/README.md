# HTTP : Request Header

Welcome to the hacker workshop 5! In this workshop, we will learn about HTTP Request Header.

HTTP headers provide essential information about the request or response. Common request headers include:

- **Host**: The domain name of the server.
- **Content-Type**: Information media type of the resource being sent in the body of the HTTP.
- **User-Agent**: Information about the client software.
- **Accept**: The MIME types the client is willing to receive.
- **Authorization**: Credentials for authentication.

## Example:
Log request headers:

```js
// index.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(req.headers));
});

server.listen(3000, () => {
  console.log('Server running at http://127.0.0.1:3000/');
});
```