# npm Workshop: Understanding Node.js Modules

Welcome to the hacker workshop 1! In this workshop, we'll explore Node.js modules, which are fundamental to building and structuring Node.js applications. Modules help you organize your code, reuse functionalities, and manage dependencies effectively.

## What Are Node.js Modules?

Modules in Node.js are individual files or directories containing code that can be exported and reused in other files. They provide a way to encapsulate functionality, making your code more modular and maintainable.

### Common Types of Node.js Modules

1. **Core Modules**: These are built-in modules provided by Node.js. Examples include `fs` (file system), `http` (HTTP server), and `path` (path utilities). They are part of the Node.js runtime and don't need to be installed separately.

2. **Local Modules**: These are custom modules that you create for your own application. They are typically stored in your project's directory and can be imported using relative paths.

3. **Third-Party Modules**: These are modules developed by the Node.js community and available through npm. Examples include `express` (web framework) and `lodash` (utility functions). They need to be installed via npm.

## Creating a Local Module

To create a local module, follow these steps:

### 1. Create a New File

Create a new file in your project directory. For example, create a file named `greet.js`:

```js
// logger.js
function log(message) {
  console.log(`Luffy Log : ${message}`);
}

module.exports = log;
```

In this file, we define a function `log` and export it using `module.exports`. This allows other files to import and use the greet function.

### 2. Import and Use the Module

In another file, such as `app.js`, you can import and use the `log` module:

```js
// app.js
const log = require('./logger');

log('Hello world!'); // Luffy Log : Hello world!
```

Here, we use `require` to import the `logger` function from `logger.js` and then call it.


## Using Core Modules

Node.js provides several built-in modules that you can use without needing to install them. Here’s an example of using the `fs` (file system) module to read a file:

```js
// readFile.js
const fs = require('fs');
const log = require('./logger');

fs.readFile('poneglyph.txt', 'utf8', (err, data) => {
  if (err) {
    log(err);
    return;
  }
  log(data);
});
```

In this poneglyph, we import the fs module and use it to read the contents of `poneglyph.txt`.


## Installing and Using Third-Party Modules

To use third-party modules, you first need to install them using npm. Here’s how:

### 1. Install a Module

For example, to install the `lodash` module, run:

```sh
npm install lodash
```

### 2. Import and Use the Module

After installing, you can use it in your code:

```js
// useLodash.js
const _ = require('lodash');
const log = require('./logger');

const numbers = [1, 2, 3, 4, 5];
const shuffled = _.shuffle(numbers);

log(shuffled);
```

In this example, we import `lodash` using `require` and use its shuffle function to `shuffle` an array of numbers.