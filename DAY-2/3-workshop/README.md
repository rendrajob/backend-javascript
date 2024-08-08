# HTTP : Methods

Welcome to the hacker workshop 3! In this workshop, we will learn about HTTP Methods.

HTTP methods define the action to be performed on the resource:

- **GET**: Retrieve data from the server.
- **POST**: Send data to the server to create a resource.
- **PUT**: Update an existing resource.
- **DELETE**: Delete a resource.
- **PATCH**: Partially update a resource.
- **OPTIONS**: Describe communication options for the target resource.
- **HEAD**: Same as GET but without the response body.

## Example:
Handle different HTTP methods:

```js
// index.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  switch (req.method) {
    case 'GET':
      res.end('Received a GET request\n');
      break;
    case 'POST':
      res.end('Received a POST request\n');
      break;
    case 'PUT':
      res.end('Received a PUT request\n');
      break;
    case 'DELETE':
      res.end('Received a DELETE request\n');
      break;
    default:
      res.end('Received an unknown request\n');
      break;
  }
});

server.listen(3000, () => {
  console.log('Server running at http://127.0.0.1:3000/');
});
```