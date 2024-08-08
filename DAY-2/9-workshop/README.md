# HTTP : Cookie

Welcome to the hacker workshop 9! In this workshop, we will learn about HTTP Cookie.

HTTP cookies are used to store data on the client-side to track and identify users. They are sent with requests and can store session data, preferences, and other information.

## Example:
Set a cookie in the response:

```js
// index.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Set-Cookie', 'name=Digistar-Class; HttpOnly');
  res.end('Cookie set\n');
});

server.listen(3000, () => {
  console.log('Server running at http://127.0.0.1:3000/');
});
```