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
  return `Luffy Log : ${message}`;
}

module.exports = log;
```

In this file, we define a function `log` and export it using `module.exports`. This allows other files to import and use the greet function.

### 2. Import and Use the Module