# npm : Understanding Semantic Versioning

Welcome to the hacker workshop 4! In this workshop, we will explore Semantic Versioning, a versioning scheme that helps you manage version numbers for your packages effectively.

- **MAJOR** version when you make incompatible API changes,
- **MINOR** version when you add functionality in a backward-compatible manner,
- **PATCH** version when you make backward-compatible bug fixes.

## Example Version Numbers

Here are a few examples of version numbers and what they might signify:

- **1.0.0**: The first stable release of your project.
- **1.1.0**: Added new features in a backward-compatible way.
- **1.1.1**: Fixed a bug in the 1.1.0 release.

## Specifying Version Ranges

When defining dependencies in `package.json`, you can specify version ranges to control which versions of a package your project can use. Here are some common operators used in version ranges:

When defining dependencies in `package.json`, you can specify version ranges to control which versions of a package your project can use. Here are some common operators used in version ranges:

- **`^`** (Caret): Allows changes that do not modify the left-most non-zero digit. For example, `^1.2.3` allows versions from `1.2.3` to `<2.0.0`.
- **`~`** (Tilde): Allows patch-level changes if a minor version is specified on the comparator. For example, `~1.2.3` allows versions from `1.2.3` to `<1.3.0`.
- **`>`** (Greater Than): Allows versions greater than the specified version. For example, `>1.2.3` allows any version greater than `1.2.3`.
- **`<`** (Less Than): Allows versions less than the specified version. For example, `<1.2.3` allows any version less than `1.2.3`.
- **`>=`** (Greater Than or Equal To): Allows versions greater than or equal to the specified version. For example, `>=1.2.3` allows any version from `1.2.3` onwards.
- **`<=`** (Less Than or Equal To): Allows versions less than or equal to the specified version. For example, `<=1.2.3` allows any version up to and including `1.2.3`.

## Checking for Outdated Packages

You ca init new project with command:

```sh
npm install express lodash@1.1.0 moment@2.8.2 axios
```

To check if there are newer versions of your dependencies available, you can use the following command:

```sh
npm outdated
```

Here is an the output of the npm outdated command:

```sh
Package    Current   Wanted   Latest  Location
lodash       1.1.0    1.3.1  4.17.21  node_modules/lodash
moment       2.8.2   2.30.1   2.30.1  node_modules/express
```

Here's what each column in the output represents:

- **`Package`** The name of the package.
- **`Current`** The currently installed version.
- **`Wanted`** The latest version that matches the version range specified in your `package.json` file.
- **`Latest`** The latest version available in the npm registry.
- **`Location`** The location of the package in your project's dependency tree.

In this example:

- The `lodash` package is currently at version 1.1.0, the wanted version is 1.3.1, and the latest version is 4.17.21
- The `moment` package is currently at version 2.8.2, the wanted version 2.30.1, and the latest version is 2.30.1

## How to Update Packages

To update a package to the latest version specified in the `Wanted` column, you can use the `npm update` command:

```sh
npm update lodash
```

To update a package to the latest version available in the npm registry, you can use the `npm install` command with the `@latest` tag:

```sh
npm update moment@latest
```

Alternatively, you can manually edit your `package.json` file to specify the desired version and then run:

```sh
npm install
```