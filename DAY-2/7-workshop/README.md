# HTTP : Body

Welcome to the hacker workshop 7! In this workshop, we will learn about HTTP Body.

The HTTP body contains the data being sent in an HTTP request or response. This can include:

- **Form Data**: Data from HTML forms.
- **JSON**: Structured data in JSON format.
- **Files**: Binary data, such as images or documents.

## Example:
Parse and log JSON body data:

```js
// index.js
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
```