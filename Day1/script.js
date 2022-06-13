// To write our first JavaScript code, we used a built-in function console.log().
// We passed an argument as input data or argument, and the function displays the output.
console.log('Hello, World!')
// The console.log() function is used to display the output in the console.

// Console.log with Multiple Arguments
// The console.log() function can take multiple parameters separated by commas. This is called a comma-separated list. 
// console.log(param1, param2, param3)
console.log('Hello', 'World', '!');

// Comments
// Comments are used to write notes in your code.
// Comments are ignored by the computer.
// I am a single line comment
/* I am a 
    multiple line comment */

// If we are printing text or string using console.log(), 
// the text has to be inside the single quotes, double quotes, or a backtick.
console.log('Hello, World!')
console.log("Hello, World!")
console.log(`Hello, World!`)

// Arithmetic Operators
// Arithmetic operators are used to perform arithmetic operations on numbers.

// + Addition
console.log(1 + 1)

// - Subtraction
console.log(1 - 1)

// * Multiplication
console.log(1 * 1)

// / Division
console.log(1 / 1)

// % Modulus
console.log(10 % 3)

// ++ Increment
if (i = 10, i++) {
    console.log(i)
}

// -- Decrement
if (i = 10, i--) {
    console.log(i)
}

// ** Exponentiation
console.log(2 ** 3)

// += Add and assign
// -= Subtract and assign
// *= Multiply and assign
// /= Divide and assign

// Adding JavaScript to a Web Page
// To add JavaScript to a web page, we use the <script> tag.

// inline Script
// create an index.html file and write JS code in index.html file

// internal script
// The internal script can be written in the head or the body, 
// but it is preferred to put it on the body of the HTML document. 

// Data types
// JavaScript has two data types: primitive data types and object data types.
// Primitive data types are the data types that are not objects. 
// They are: number, string, boolean, null, undefined, and symbol.

// Numbers
// Numbers are numbers. They are represented by the number sign followed by a sequence of digits. 
// The digits can be a decimal number, or a hexadecimal number, or a binary number.
// integers (negative or positive, whole numbers, zero): 1, 2, 3, -4, 5, -6, 7, 8, 9, -10 
// floating point numbers (negative or positive, decimals, zero): 1.0, 2.0, 3.0, -4.0, 5.0, -6.0, 7.0, 8.0, 9.0, -10.0
// floating point numbers can be expressed in exponential notation: 1.0e2, 1.0e-2, 1.0E2, 1.0E-2
// floating point numbers can be expressed in scientific notation: 1.0e+2, 1.0e-2, 1.0E+2, 1.0E-2
// floating point numbers can be expressed in engineering notation: 1.0e+2, 1.0e-2, 1.0E+2, 1.0E-2
// floating point numbers can be expressed in hexadecimal notation: 0x1.0p+2, 0x1.0p-2, 0X1.0P+2, 0X1.0P-2
// floating point numbers can be expressed in binary notation: 0b1.0p+2, 0b1.0p-2, 0B1.0P+2, 0B1.0P-2
// floating point numbers can be expressed in octal notation: 0o1.0p+2, 0o1.0p-2, 0O1.0P+2, 0O1.0P-2
let num = 1;
console.log(num)

// Strings
// Strings are sequences of characters.
// Strings are surrounded by double quotes.
// Strings can contain any character, including special characters, numbers, and spaces.
// Strings can be single or double quoted or backtick.
// Strings can be empty.
// Strings can be concatenated with the + operator.
// Strings can be concatenated with the += operator.
// 'a'
// 'Asabeneh'
// "Asabeneh"
// 'Finland'
// 'JavaScript is a beautiful programming language'
// 'I love teaching'
// 'I hope you are enjoying the first day'
// `We can also create a string using a backtick`
// 'A string could be just as small as one character or as big as many pages'
// 'Any data type under a single quote, double quote or backtick is a string'
let str = 'Hello, World!'
console.log(str)

// Booleans
// Booleans are used to represent true or false values.
// Booleans are represented by the keywords true or false.
// true // if the light is on, the value is true
// false // if the light is off, the value is false
let bool = false
if (bool) {
    console.log('The light is on')
} else {
    console.log('The light is off')
}

// Null
// Null is a special value that represents the absence of a value.
// Null is represented by the keyword null.
// null // if the value is absent, the value is null
let nullValue = null
console.log(nullValue)

// Undefined
// Undefined is a special value that represents the absence of a value.
// Undefined is represented by the keyword undefined.
// undefined // if the value is absent, the value is undefined
let firstaName;
console.log(firstaName)

// Symbols
// Symbols are used to create unique identifiers for objects.
// Symbols are represented by the keyword Symbol.
// Symbol('name')
// Symbol('name') === Symbol('name')
let symbol1 = Symbol('name')
let symbol2 = Symbol('name')
console.log(symbol1 === symbol2)

// checking data types
// typeof operator
// typeof operator is used to check the data type of a variable.
console.log(typeof 'Asabeneh') // string
console.log(typeof 5) // number
console.log(typeof true) // boolean
console.log(typeof null) // object type
console.log(typeof undefined) // undefined

// variables
// variables are used to store values. Variables are containers of data.
// Variables are used to store data in a memory location. 
// When a variable is declared, a memory location is reserved.
// When a variable is assigned to a value (data), the memory space will be filled with that data. 
// To declare a variable, we use var, let, or const keywords.

// For a variable that changes at the same time, we use var.
// If the data does not change at all, we use const. For example, PI, country name, gravity do not change, and we can use const.
// A JavaScript variable name should not begin with a number.
// A JavaScript variable name does not allow special characters except dollar sign and underscore.
// A JavaScript variable name follows a camelCase convention.
// A JavaScript variable name should not have space between words.

// For a variable that changes at a different time, we use let.

// Declaring different variables of different data types
let firstName = 'Asabeneh' // first name of a person
let lastName3 = 'Yetayeh' // last name of a person
let country = 'Finland' // country
let city = 'Helsinki' // capital city
let age2 = 100 // age in years
let isMarried3 = true

console.log(firstName, lastName3, country, city, age2, isMarried3);

// Declaring variables with number values
let age1 = 100 // age in years
const gravity = 9.81 // earth gravity  in m/s2
const boilingPoint = 100 // water boiling point, temperature in °C
const PI = 3.14 // geometrical constant
console.log(gravity, boilingPoint, PI)

// Variables can also be declaring in one line separated by comma, however I recommend to use a seperate line to make code more readble
let name1 = 'Asabeneh',
    job = 'teacher',
    live = 'Finland'
console.log(name1, job, live)

// Object data types are the data types that are objects.
// They are: object, array, function, and date.