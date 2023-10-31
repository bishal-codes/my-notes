# Variables

when writing programs, developer need to work with different kind of data, such as numbers, strings, objects, arrays, etc.
computer need to store these different data in somewhere in the memory
Variables come in picture when we need to get to that data
Variables allow us to write name for the data, and also automatic keep in track of data where they exist in the memory

1. To create a variable binding, we need to use `let` keyword

```js
// let allows us to create variable and reassign it
// allow us to make modification in the data when we need
let name = "John Doe";
name = "Bill Gates";
```

2. we can use `const` keyword to create a constant assign once binding

```js
const name = "John Doe";
name = "Bill Gates"; // Error
// we can still modify the data in the constant using other method but cannot reassign
// data can be change but cannot be reassign
```

3. we can use `var` keyword to create a variable binding

```js
// never use it under any circumstances
// its a legacy keyword leftover from earlier versions and have some unconventional behavior that is hard to understand and read properly
var name = "John Doe";
name = "Bill Gates";
```
