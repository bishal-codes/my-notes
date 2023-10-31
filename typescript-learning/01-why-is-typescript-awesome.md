# Why is TypeScript awesome?

## Why should you learn TypeScript while we have JavaScript?

1. `Type Safety`: TypeScript ensures type safety by catching type-related errors at compile-time. For example:

```typescript
// JavaScript (No Type Safety)
function add(x, y) {
  return x + y;
}
console.log(add("2", 3)); // No error in JavaScript

// TypeScript (Type Safety)
function add(x: number, y: number): number {
  return x + y;
}
console.log(add("2", 3)); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
```

2. `Improved Code Quality`: TypeScript enforces coding standards and helps maintain clean code. For instance, using proper naming conventions and code organization:

```typescript
// TypeScript
class Person {
  constructor(private name: string) {}

  greet() {
    console.log(`Hello, ${this.name}!`);
  }
}

// TypeScript (enforces coding standards)
function calculateTotal(items: number[]): number {
  return items.reduce((acc, item) => acc + item, 0);
}
```

3. `Clearer Code`: Type annotations in TypeScript make the code self-explanatory:

```typescript
// TypeScript
function calculateTotal(price: number, quantity: number): number {
return price \* quantity;
}
```

4. `Enhanced Tooling`: TypeScript provides real-time suggestions and error checking in code editors. For example, Visual Studio Code shows type hints and error highlights as you type.

5. `Better Collaboration`: TypeScript allows you to define clear interfaces and types, enhancing team collaboration:

```typescript
// TypeScript (interfaces for better collaboration)
interface User {
  name: string;
  age: number;
}
function getUserInfo(user: User): string {
  return `Name: ${user.name}, Age: ${user.age}`;
}
```

6. `Reduced Bugs`: TypeScript helps prevent runtime bugs related to type issues. For instance, it can catch type-related errors like passing the wrong argument types.

```js
// TypeScript (preventing type-related bugs)
function calculateTotal(items: number[]): number {
  return items.reduce((acc, item) => acc + item, 0);
}
calculateTotal([1, 2, 3, "4"]); // Error: Argument of type 'string' is not assignable to parameter of type 'number'
```

7. `Less Testing Required`: TypeScript's type system eliminates the need for some test cases. When types are correctly defined, you can rely on TypeScript's checks.

```js
// TypeScript (type checking reduces testing)
function divide(a: number, b: number): number {
  return a / b;
}
divide(5, 0); // Error: Division by zero
```

8. `Easier Refactoring`: TypeScript assists in safe code refactoring. It checks for type mismatches and ensures consistency during code changes.

```js
// TypeScript (helps with refactoring)
function greet(name: string): string {
  return `Hello, ${name}!`;
}
function getFullName(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`;
}
```

9. `Great for Large Projects`: In large projects, TypeScript's strong typing and organization become indispensable for managing complexity.

10. `TypeScript and JavaScript Integration`: TypeScript seamlessly integrates with JavaScript, allowing you to migrate gradually and use TypeScript only where needed.

```js
// JavaScript (existing code)
function add(a, b) {
  return a + b;
}

// You can rename this file with a `.ts` extension, and TypeScript will infer types based on usage. This way, you can gradually migrate to TypeScript without a complete rewrite.
```

## Comparison:

| Comparison                      | TypeScript                                                                                                      | JavaScript                                                                           |
| :------------------------------ | :-------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------- |
| `Type Safety`                   | provides clear type definitions for parameters, reducing the likelihood of type-related errors.                 | relies on runtime checks, which can lead to issues only discovered during execution. |
| `Integrated Documentation`      | offers self-documentation through type annotations, making it easier to understand the function's requirements. | does not provide any documentation.                                                  |
| `Reduced Boilerplate`           | eliminates extensive boilerplate code, resulting in cleaner and more concise code.                              | requires additional lines to set default values and perform type checks.             |
| `Enhanced Developer Experience` | TypeScript's type checking and code suggestions in IDEs improve development speed and code reliability.         | lacks these features.                                                                |

- To completely understand TypeScript, you need to understand JavaScript.

```js
function popup(msg, options) {
  const defaultOptions = {
    kind: "info",
    timeout: 5000,
  };
  const msgOptions = Object.assign({}, defaultOptions, options);

  // Validation for 'kind'
  if (typeof msgOptions.kind !== "string") {
    throw new Error("Option 'kind' must be a string");
  }
  const kinds = ["info", "warning", "error"];
  if (!kinds.includes(msgOptions.kind)) {
    throw new Error(`Option 'kind' must be one of: ${kinds}`);
  }

  // Validation for 'timeout'
  if (typeof msgOptions.timeout !== "number") {
    throw new Error("Timeout option must be a number");
  }
  if (msgOptions.timeout < 0) {
    throw new Error("Timeout must be > 0");
  }

  // Validation for 'msg'
  if (typeof msg !== "string") {
    throw new Error("'msg' must be a string");
  }

  // Actual code for displaying the pop-up
  // ...
}
```

In JavaScript,

- encounter boilerplate code to handle default options and lack clear type definitions.
- The developer needs to rely on comments or external documentation to understand how to use the function. This leads to more code and increased complexity.

```js
export class Milliseconds {
  private readonly _n: number;

  constructor(n: number) {
    if (n < 0) {
      throw new Error("Number must be >= 0");
    } else {
      this._n = n;
    }
  }

  get n(): number {
    return this._n;
  }
}

const Kinds = ['info', 'warning', 'error'] as const;
type PopupKinds = typeof Kinds[number];

interface PopupOptions {
  kind: PopupKinds;
  timeout: number; // Assuming "Milliseconds" is a type you have defined elsewhere
}


type PopupOptions = {
  kind: "info" | "warning" | "error",
  timeout: number,
};

function popup(msg: string, options: PopupOptions): void {
  const defaultOptions: PopupOptions = {
    kind: "info",
    timeout: new Milliseconds(5000), // Corrected from "new Milliseconds(5000)"
  };
  const msgOptions = Object.assign({}, defaultOptions, options);

  // The actual code for displaying the pop-up
  // ...
}
```

In TypeScript,

- clearly define the type PopUpOptions, which specifies the expected structure of the options parameter.
- ensures that developers know exactly what to provide when using the function.
- The code is straightforward, and documentation is integrated into the type definitions.

The main functional difference between TypeScript (TS) and JavaScript (JS) is that `TypeScript allows you to declare and enforce data types during development, catching type-related errors before runtime.` In contrast, JavaScript doesn't provide strong type checking and relies on runtime type checks.

```js
function addNumbers(a: number, b: number): number {
  return a + b;
}

const result = addNumbers(5, 3); // Correct usage
const error = addNumbers(5, "3"); // TypeScript will catch this as a type error
```

```js
function addNumbers(a, b) {
  return a + b;
}

const result = addNumbers(5, 3); // Works fine
const error = addNumbers(5, "3"); // JavaScript won't catch this type error until runtime
```

- More test cases for JavaScript

```js
describe("JavaScript Pop up Function Tests", () => {
  it("rejects invalid kinds", () => {
    const options = { kind: "wrong" };
    expect(() => popup("test", options)).toThrow();
  });

  it("rejects non-string kinds", () => {
    const options = { kind: 5 };
    expect(() => popup("test", options)).toThrow();
  });

  it("accepts valid kinds", () => {
    const kinds = ["info", "warning", "error"];
    for (const k of kinds) {
      const options = { kind: k, timeout: 5000 };
      expect(() => popup("test", options)).not.toThrow();
    }
  });

  it("rejects timeouts less than 0", () => {
    const options = { timeout: -1 };
    expect(() => popup("test", options)).toThrow();
  });

  it("rejects non-numeric timeouts", () => {
    const options = { timeout: "whoops" };
    expect(() => popup("test", options)).toThrow();
  });

  it("rejects non-string messages", () => {
    expect(() => popup(2)).toThrow();
  });
});
```

- While one test case enough for above TypeScript code

```js
describe("TypeScript Pop up Function Tests", () => {
  it("only allows zero or higher timeouts", () => {
    const createMilliseconds = (n: number) => {
      if (n < 0) {
        throw new Error("Milliseconds must be zero or higher");
      }
      return { n };
    };

    expect(() => createMilliseconds(-1)).toThrow();
    const zero = createMilliseconds(0);
    expect(zero.n).toBe(0);
    const one = createMilliseconds(1);
    expect(one.n).toBe(1);
  });
});
```

| Testing | TypeScript                                                                                      | JavaScript                                                                                                               |
| ------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| 1.      | provides static type checking                                                                   | lacks static type checking.                                                                                              |
| 2.      | will catch any type-related errors during development, reducing the need for extensive testing. | need additional test cases to verify that the validation and error-handling logic works correctly for various scenarios. |

- In JavaScript, because it's a `dynamically typed language`, you might encounter type-related bugs only during runtime. This means you need to write more extensive tests to cover all possible type-related scenarios to ensure your code behaves correctly. JavaScript is more permissive with types, so you need to test different input types and conditions to ensure the function behaves as expected.

`Testing in JavaScript typically involves validating not only types but also data and control flow, error handling, and other aspects of your code, making it necessary to have more test cases.`

| Diff    | Dynamically Typed                                                                         | Statically Typed                                                    |
| ------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| 1.      | data types are determined at runtime.                                                     | data types are determined at compile time.                          |
| 2.      | You don't need to specify the data type of a variable when you declare it                 | You must specify the data type of a variable when you declare it.   |
| 3.      | Variable types can change during the program's execution.                                 | Variable types are fixed and cannot change during execution.        |
| 4.      | It's more flexible but can lead to runtime errors if variable types are used incorrectly. | It's more strict and can catch type-related errors at compile time. |
| example | JavaScript, Python                                                                        | TypeScript, Java, C++                                               |
