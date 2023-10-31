/* eslint-disable */

// ------  Variables ------
const myLearningPath = "Typescript";
// const iamLearning = 'Typescript';
// const learningPath = `Typescript`;
const amount = 5; // Number
const decimals = 2.5; // fractions
const oneThousand = 1e3; // 1000 = 1 * 10^3
const allPermissions = 0o7; // octal
const hexByte = 0xff; // hexadecimal
const binary = 0b1010; // binary
const bigInt = 9007199254740991n; // BigInt
const yes = true;
const no = false;
const missing = undefined; // when value  completely doesn't exist or is completely missing
const empty = null; // when we know value is not there or missing

// reassigning a constant is not allowed
// amount = 10; // cannot assign to 'amount' because it is a constant

// const variables must be initialized
// const hi; // error - variable 'hi' must be initialized
// hi = "hi"; // cannot assign to 'hi' because it is a constant

// using let keyword, we can reassign the value
let myLearningPath2 = "Typescript";
myLearningPath2 = "React";
myLearningPath2 = "Angular";

let hello;
hello = "hi";
hello = "bye";
hello = "hello";

// although we can reassign but we cannot use same keyword again in same variable
//  let myLearningPath2 = "Redux"; // cannot redeclare block-scoped variable 'myLearningPath2'

{
  let myLearningPath2 = "Redux"; // shadowing
}
