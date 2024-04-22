// Variables and Primitive Types
// is a named memory location that holds a value
// can store a lot of data types: string, number, boolean, arrays, objects, etc.
// declare variable by specifying its name, data type, and optionally initial value.
// keywords are used: let, const, var to  declare variables

// -------------- Const -------------------------------
// - once const is defined, the value should be assigned to it at creation time
// - cannot reassign or change the value of a constant variable

// can use single or double quotes
const courseName = "typescript";
// const courseName1 ='typescript';

// back-quotes
console.log(`The full course name is ${courseName}`); // what is this ${} called?

// number
const age = 25;

// decimal
const price = 9.99;

// exponents
const largeNumber = 10e6;

// octal
const octalNum = 0o14;

// hexadecimal
const hexNum = 0x1a;

// binary
const binNum = 0b1010;

// BigInt
const bigInteger = 1234567890123456789n;

// boolean
const isDone = false;
const yes = true;

// completely missing missing - when variable completely doesn't exist and we don't know anything about it
const x = undefined;
// Cannot assign to 'x' because it is a constant.ts
// x = null;

// null - we know it's missing: explicitly defined as nothing/empty
const y = null;

// -------------------- Let -------------------------
// - -------------- Block scope ----------------
// variable needs to be changed later
let z; // declared but uninitialized variable
z = "initial value";
z = "value";

// - cannot re-use the same variable twice because  let has block scope
// let z = "initial value"; // Cannot redeclare block-scoped variable 'z'.

// we can create a block scope using {} called variable shadowing
{
  //   console.log(z); // Block-scoped variable 'z' used before its declaration.
  let z = "final value";
}
