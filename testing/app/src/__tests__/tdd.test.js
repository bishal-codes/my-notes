// palindrome test
// 1. Write a test for a function called isPalindrome that returns true if the input string is a palindrome, and false if it is not.
// 2. Write the function that makes the test pass.
// 3. Refactor the function to make it more concise.

const isPalindrome = require("../tdd");

// abc => false\
test("// abc => false", () => {
  expect(isPalindrome("abc")).toBe(false);
});

// aba => true
test("// aba => true", () => {
  const result = isPalindrome("aba");
  expect(result).toBe(true);
});

// abba => true
test("// abba => true", () => {
  expect(isPalindrome("abba")).toBe(true);
});

// abcba => true
test("// abcba => true", () => {
  expect(isPalindrome("abcba")).toBe(true);
});

// no input => null
test("// no input => null", () => {
  expect(isPalindrome()).toBe(null);
});

// null => null
test("// null => null", () => {
  const result = isPalindrome(null);
  expect(result).toBe(null);
});

// single letter => true
test("// single letter => true", () => {
  expect(isPalindrome("a")).toBe(true);
});

// 123 => false
test("// 123 => false", () => {
  expect(isPalindrome("123")).toBe(false);
});

// 121 => true
test("// 121 => true", () => {
  expect(isPalindrome("121")).toBe(true);
});

// negative number (e.g. -121) => true
test("// negative number (e.g. -121) => ignore negative sign", () => {
  expect(isPalindrome(-121)).toBe(true);
});

// boolean,  {}, [] => null
test("// boolean,  {}, [] => null", () => {
  expect(isPalindrome(true)).toBe(null);
  expect(isPalindrome({})).toBe(null);
  expect(isPalindrome([])).toBe(null);
});

// Aba => true
test("// Aba => true", () => {
  expect(isPalindrome("Aba")).toBe(true);
});

// "  aba  " => true
test("//   aba  => true", () => {
  expect(isPalindrome("  aba  ")).toBe(true);
});

// length of string (10) => null
test("// length of string (10) => null", () => {
  expect(isPalindrome("abcdefghijk")).toBe(null);
});

// multiple inputs => null
test("// multiple inputs => null", () => {
  const inputs = ["a", "b"];
  const result = isPalindrome(inputs);
  expect(result).toBe(null);
});
