// 1. Write a single line comment which says, comments can make code readable
// Ans - comments can make code readable

// 2. Write another single comment which says, Welcome to 30DaysOfJavaScript
// Ans - Welcome to 30DaysOfJavaScript

// 3. Write a multiline comment which says, comments can make code readable, easy to reuse and informative
/* Ans - comments can make code readable, 
            easy to reuse and informative */

// 4. declare variables and assign string, boolean, undefined and null data types
// Ans -
var name = "John";
var age = 30;
var isMarried = true;
var isMarried = null;
var isMarried = undefined;

// 5. use the JavaScript typeof operator to check different data types. Check the data type of each variable
// Ans -
console.log(typeof name);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof isMarried);
console.log(typeof isMarried);

// 6. Declare four variables without assigning values
// Ans -
var firstProject;
var year;
var twinkle;
var lastName;

// 7. Declare four variables with assigned values
// Ans -
var firstProject = "30DaysOfJavaScript";
var year = 2020;
var twinkle = "Twinkle";
var lastName = "Smith";

// 8. Declare variables to store your first name, last name, marital status, country and age in multiple lines
// Ans -
var firstName5 = "Asabeneh";
var lastName = "Yetayeh";
var isMarried = true;
var countryy = "Finland";
var age = 100;

// 9. Declare variables to store your first name, last name, marital status, country and age in a single line
// Ans -
var firstName6 = "Asabeneh",
  lastName = "Yetayeh",
  isMarried = true,
  countr = "Finland",
  age = 100;

// 10. Declare two variables myAge and yourAge and assign them initial values and log to the browser console.
// Ans -
var myAge = "I am " + 100 + " years old";
var yourAge = "You are " + 100 + " years old";
console.log(myAge, yourAge);

// You are given C integers, find their arithmetic mean. The arithmetic mean is the sum of all the numbers divided by the count of numbers.
// Example:
// Input: [1,2,3,4,5]
// Output: 3

var C = [1, 2, 3, 4, 5];
// Next C lines: Num positive or negative integer.
var sum = 0;
for (var i = 0; i < C.length; i++) {
  sum += C[i];
}
var mean = sum / C.length;
console.log(mean);
