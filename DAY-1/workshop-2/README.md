# npm : Setting Up Your Development Environment

Welcome to the hacker workshop 2! Before we dive into installing packages and exploring npm, let's set up a development environment to keep our work organized and clean.

## Step 1: Create a New Directory

First, create a new directory for your workspace files. You can name this directory whatever you like. Open your terminal and run the following command:

```sh
mkdir digistar-hacker
```

## Step 2: Change into the New Directory

Navigate into the newly created directory:

```sh
cd digistar-hacker
```

## Step 3: Initialize a New npm Project

Run `npm init` to create a package.json file. This file will hold metadata about your project and its dependencies.

```sh
npm init
```

You will be prompted to answer several questions. You can press `Enter` to accept the default values for each question. Below are the questions you'll encounter, along with explanations and default values:

1. *`package name:`*
    - This is the name of your project/package. By default, it will use the name of the current directory. It must be lowercase and can contain hyphens.
    - **Default:** the name of the directory
    - Lets set the your name as package name (e.g., `luffy-digistar-hacker`)

2. *`version:`*
    - This is the initial version of your project. Semantic versioning (semver) is used (e.g., `1.0.0`).
    - **Default:** `1.0.0`

3. *`description:`*
    - A brief description of your project. This can be helpful for anyone looking at your `package.json` file or for when you publish the package.
    - **Default:** (leave blank)

4. *`entry point:`*
    - This is the main file of your project. When someone requires your package, this is the file that will be loaded.
    - **Default:** `index.js`

5. *`test command:`*
    - The command to run tests for your project. You can set this up to run your test suite.
    - **Default:** (leave blank)

6. *`git repository:`*
    - The URL of the repository where your project is hosted (e.g., GitHub). This is useful if you are sharing your project.
    - **Default:** (leave blank)

7. *`keywords:`*
    - A list of keywords to help people find your project. This is especially useful if you publish your package to the npm registry.
    - **Default:** (leave blank)

8. *`author:`*
    - Your name or the name of the project's author. This can also include an email address and a URL.
    - **Default:** (leave blank or add your name)
    - Lets set the your real name (e.g., `monkey d luffy`)

9. *`license:`*
    - The license under which your project is released. Common choices are MIT, ISC, Apache-2.0, etc.
    - **Default:** `ISC`

After answering these questions, a package.json file will be created in your directory with the provided values.

### Example `package.json` File

After running `npm init` and accepting the default values, your package.json file might look something like this:

```json
{
  "name": "luffy-digistar-hacker",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "monkey d luffy",
  "license": "ISC"
}
```

Now that your development environment is set up, you're ready to start working with npm! 