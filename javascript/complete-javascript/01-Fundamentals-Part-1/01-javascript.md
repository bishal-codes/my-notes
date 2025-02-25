1. [Back to top](#top)
2. [Programming Languages](#programming-languages)
3. [JavaScript](#javascript)

```javascript
alert("let's learn javascript");
```

# Programming Languages

- programming languages are a set of instructions that tell a computer how to perform a task
- programming languages are used to create web pages, mobile apps, games, and more

## High Level vs Low Level

| High Level                                       | Low Level                                     |
| ------------------------------------------------ | --------------------------------------------- |
| easy to read and write                           | difficult to read and write                   |
| abstracted                                       | concrete                                      |
| portable                                         | not portable                                  |
| requires an interpreter                          | requires a compiler                           |
| programs run slower making worse performance     | programs run faster making better performance |
| No understanding of how hardware components work | Understanding of how hardware components work |
| examples: JavaScript, Python, Ruby, PHP, Java    | examples: C, C++, Assembly, Go, Rust          |

# Javascript

## What is javascript?

- high level: no need worry about computer memory, registers, etc.
- synchronous: one command at a time
- prototype-based: style of object-oriented programming in which classes are not explicitly defined but rather derived by adding properties and methods to an instance of another class or less frequently adding them to empty object. (style allows the creation of an object without first defining its class)
- single-threaded: a thread in CS is the execution of multiple tasks or programs at the same time. Each unit capable of executing code is called a thread. The main thread is where browser processes user events and paints. By default, browser uses a single thread to run all the JS in page and as well as to perform layout, reflows and garbage collection. This means that long running javascript functions can block thread, leading to an unresponsive page and a bad user experience. Modern JS offers additional threads by using web workers which is used to spin off a sub-program which runs concurrently with the main thread in a thread of its own.
- dynamically-typed language: where interpreter assigns variables a type at runtime based on the variable's value at the time.
- interpreted programming language: no need to compile code before running it
- object-oriented: based on objects, stores data in properties, and methods that perform actions on the data
- multi-paradigm: can use different programming styles like functional, procedural, and object-oriented
- lightweight, interpreted, or just-in-time compiled programming language with first-class functions(functions are treated like any other variable).
- JIT Compilation or dynamic translation or run-time compilation: way of executing code that involves compilation during the execution of the program (at the run time) rather than before execution.

## History of JavaScript

- LiveScript -> JavaScript
- [ECMAScript](https://en.wikipedia.org/wiki/ECMAScript) (ES5, ES6)
  - ECMAScript (ES) is a scripting-language specification standardized by Ecma International.
  - It was created to standardize JavaScript.
  - JavaScript has remained the best-known implementation of ECMAScript.
- ECMAScript (ES2016, ES2017)
- ES5 -> ES6 -> ES2016 -> ES2017 -> ES2018 -> ES2019 -> ES2020

## HTML, CSS vs JavaScript

- HTML: content, nouns
- CSS: style, adjectives
- JavaScript: behavior, verbs

- HTML and CSS
  - Markup language used to describe and define elements within a document.
- JavaScript
  - Programming language used to communicate instructions to a machine.

## JavaScript Frameworks

- Frameworks are a collection of libraries that are used to build applications.
- Dynamic effects and web applications in browsers
- front-end frameworks

- [React](https://reactjs.org/)
- [Angular](https://angular.io/)
- [Vue](https://vuejs.org/)
- [Svelte](https://svelte.dev/)
- [Ember](https://emberjs.com/)
- [Meteor](https://www.meteor.com/)
- [Backbone](http://backbonejs.org/)

## JavaScript Libraries

- Libraries are pre-written code that you can use in your project.
- front-end libraries

- [jQuery](https://jquery.com/)
- [Lodash](https://lodash.com/)
- [Moment](https://momentjs.com/)
- [Underscore](https://underscorejs.org/)

## JavaScript Tools

- Tools are used to help you build your project.
- front-end tools

- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [Gulp](https://gulpjs.com/)
- [Grunt](https://gruntjs.com/)
- [NPM](https://www.npmjs.com/)
- [Yarn](https://yarnpkg.com/)
- [Bower](https://bower.io/)
- [Yeoman](https://yeoman.io/)

## JavaScript Testing

- Testing is used to make sure your code works as expected.
- front-end testing

- [Jasmine](https://jasmine.github.io/)
- [Mocha](https://mochajs.org/)
- [QUnit](https://qunitjs.com/)
- [Karma](https://karma-runner.github.io/latest/index.html)
- [Jest](https://jestjs.io/)
- [Cypress](https://www.cypress.io/)
- [Nightwatch](https://nightwatchjs.org/)

## JavaScript Linters

- Linters are used to check your code for errors.
- front-end linters

- [ESLint](https://eslint.org/)
- [JSHint](https://jshint.com/)
- [JSLint](https://jslint.com/)
- [Prettier](https://prettier.io/)

## JavaScript Editors

- Editors are used to write and edit your code.
- front-end editors

- [Visual Studio Code](https://code.visualstudio.com/)
- [Atom](https://atom.io/)
- [Sublime Text](https://www.sublimetext.com/)
- [Brackets](http://brackets.io/)

## JavaScript Debuggers

- Debuggers are used to find errors in your code.
- front-end debuggers

- [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/)
- [Firefox DevTools](https://developer.mozilla.org/en-US/docs/Tools)

## JavaScript Transpilers

- Transpilers are used to convert your code to a different version of JavaScript.
- front-end transpilers

- [Babel](https://babeljs.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [CoffeeScript](https://coffeescript.org/)
- [Dart](https://dart.dev/)

## JavaScript Package Managers

- Package managers are used to install and manage dependencies in your project.
- front-end package managers

- [NPM](https://www.npmjs.com/)
- [Yarn](https://yarnpkg.com/)
- [Bower](https://bower.io/)

# JavaScript Syntax

- JavaScript is case-sensitive
- JavaScript uses Unicode
- JavaScript statements end with a semicolon
- JavaScript code blocks are surrounded by curly braces
- to output data to the screen, use the `document.write()` method
- JavaScript is a loosely typed language

# Naming Conventions

- camelCase: `myName`
- PascalCase: `MyName`
- kebab-case: `my-name`
- snake_case: `my_name`

# JavaScript Comments

- comments are used to explain code
- comments are ignored by JavaScript
- comments can make code more readable
- comments can be used to prevent execution when testing alternative code

## Single Line Comments

```js
// This is a single line comment
```

## Multi Line Comments

```js
/*
This is a multi 
  line comment
*/
```
