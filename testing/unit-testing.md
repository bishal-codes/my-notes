# Unit Testing

- testing a single unit of code
- testing a single function, method, or class in isolation from the rest of the application

## Component Testing

- testing a single component in isolation from the rest of the application

# Configuration

1. Install Jest

```bash
npm i --save-dev jest
or
npm i jest -D
```

2. Add the following to your `package.json` file

```json
"scripts": {
  "test": "jest"
}
```

3. To run the tests, run the following command

```bash
npm test
```

**Note:** Jest will look for test files with the following naming convention: `*.test.js` or `*.spec.js` or `**/__tests__/**/*.[jt]s?(x), **/?(*.)+(spec|test).[tj]s?(x)`

- `__` - double underscore, also called dunder
- `*` - wildcard character
- `**` - recursive wildcard
- `?` - single character wildcard
- `()` - grouping
- `[]` - character class or set
- `+` - one or more
- `.` - any character
- `|` - or
- `!` - not

# Writing Tests

```javascript
// sum.js
function sum(a, b) {
  return a + b;
}

module.exports = sum;
```

```javascript
// sum.test.js
const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
```

## Assertions

- `test(name, fn, timeout)` - creates a test with a name and a function that contains the test
- `describe(name, fn)` - creates a block that groups together several related tests
- `beforeEach(fn, timeout)` - runs a function before each test in a `describe` block
- `afterEach(fn, timeout)` - runs a function after each test in a `describe` block
- `beforeAll(fn, timeout)` - runs a function before all tests in a `describe` block
- `afterAll(fn, timeout)` - runs a function after all tests in a `describe` block
- `skip(name, fn)` - skips a test
- `only(name, fn)` - runs only this test
- `fail(error)` - fails a test with an error

- `expect(value)` - creates an expectation that makes assertions on the value
- `toBe(value)` - compares the value using `Object.is` to determine if two values are the same
- `toEqual(value)` - recursively checks every field of an object or array
- `not` - negates the assertion
- `toBeNull()` - matches only `null`
- `toBeUndefined()` - matches only `undefined`
