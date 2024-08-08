# npm : Installing and Updating Dependencies

Welcome to the hacker workshop 3! In this workshop, we will learn how to install, update and uninstall dependencies in a Node.js project using npm.

## Step 1: Initialize a New Node.js Project

You can use your project from the latest workshop

## Step 2: Install Dependencies

### 1. Install latest version

```sh
npm install express
```

### 2. Install spesific version

```sh
npm install lodash@1.1.0
```

You can install multiple packages at once

```sh
npm install express lodash@1.1.0 moment@2.8.2 axios
```

## Step 3: Update Dependencies

### 1. Update latest version (based on version range)

```sh
npm update lodash
```

### 2. Update spesific version

```sh
npm install lodash@1.3.1
```

## Step 4: Uninstall Dependencies

```sh
npm uninstall express
```

You can install multiple packages at once

```sh
npm uninstall express axios
```

Check the `package.json` and `package-lock.json` files to verify that the dependencies were added, or you can check the installed version.

```sh
npm list
```