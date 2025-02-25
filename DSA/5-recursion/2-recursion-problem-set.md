# Recursion Problems

1. Write a function called power which accepts a base and an exponent.
   The function should return the power of the base to the exponent.
   This function should mimic the functionality of `Math.pow()` - do not worry about negative bases and exponents.
   `power(2,0)` --> 1
   `power(2,2)` --> 4

```js
function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

power(2, 0); // 1
power(2, 5); // 32
```

2. Write a function `factorial` which accepts a number and returns the factorial of that number.
   A factorial is the product of an integer and all the integers below it;
   `e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24. factorial zero (0!) is always 1.`

```js
function factorial(num) {
  if (num < 0) return 0;
  if (num <= 1) return 1;
  return num * factorial(num - 1);
}

factorial(4); // 24
```

3. Write a function called `productOfArray` which takes in an array of numbers and returns the product of them all.
   `productOfArray([1,2,3])` ---> 6

```js
function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

productOfArray([1, 2, 3]); // 6
```

4. Write a function called `recursiveRange` which accepts a number and adds up all the numbers from 0 to the number passed to the function
   `recursiveRange(6)` ---> 21

```js
function recursiveRange(num) {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
}

recursiveRange(6); // 21
```

5. Write a recursive function called `fib` which accepts a number and returns the nth number in the Fibonacci sequence.
   Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

Logic:

- if n <= 2 return 1
- return fib(n - 1) + fib(n - 2)

```js
function fib(num) {
  if (num <= 2) return 1;
  return fib(num - 1) + fib(num - 2);
}

fib(4); // 3
```

6. Write a recursive function called `reverse` which accepts a string and returns a new string in reverse.
   `reverse('awesome')` ---> 'emosewa'
   `reverse('rithmschool')` ---> 'loohcsmhtir'

```js
functiopn reverse(str){
 if (str<= 1) return str;
  return reverse(str.slice(1)) + str[0];

  //using reverse() function
  //return str.split('').reverse().join('');
}

reverse('awesome'); // 'emosewa'
```

7. Write a recursive function called `isPalindrome` which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.
   `isPalindrome('awesome')` ---> false
   `isPalindrome('foobar')` ---> false
   `isPalindrome('tacocat')` ---> true
   `isPalindrome('amanaplanacanalpanama')` ---> true
   `isPalindrome('amanaplanacanalpandemonium')` ---> false

```js
function isPalindrome(str) {
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) return false;
  return isPalindrome(str.slice(1, -1));
}

isPalindrome("awesome"); // false
```

8. Write a recursive function called `someRecursive` which accepts an array and a callback.
   The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.
   `someRecursive([1,2,3,4], isOdd)` ---> true
   `someRecursive([4,6,8,9], isOdd)` ---> true
   `someRecursive([4,6,8], isOdd)` ---> false
   `someRecursive([4,6,8], val => val > 10)` ---> false

```js
function someRecursive(arr, callback) {
  if (arr.length === 0) return false;
  if (callback(arr[0])) return true;
  return someRecursive(arr.slice(1), callback);
}

someRecursive([1, 2, 3, 4], isOdd); // true

function isOdd(val) {
  return val % 2 !== 0;
}
```

9. Write a recursive function called `flatten` which accepts an array of arrays and returns a new array with all values flattened.
   `flatten([1,2,3,[4,5]])` ---> [1,2,3,4,5]
   `flatten([1,[2,3],[4,5]])` ---> [1,2,3,4,5]
   `flatten([[1],[2],[3]])` ---> [1,2,3]
   `flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])` ---> [1,2,3]

```js
function flatten(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // Array is Ar1a
      newArr = newArr.concat(flatten(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

flatten([1, 2, 3, [4, 5]]); // [1,2,3,4,5]
```

10. Write a recursive function called `capitalizeFirst`. Given an array of strings, capitalize the first letter of each string in the array.
    `capitalizeFirst(['car','taco','banana']);` ---> ['Car','Taco','Banana']

```js
function capitalizeFirst(arr) {
  if (arr.length === 0) return [];
  let newArr = [];
  newArr.push(arr[0][0].toUpperCase() + arr[0].slice(1));
  return newArr.concat(capitalizeFirst(arr.slice(1)));
}

capitalizeFirst(["car", "taco", "banana"]); // ['Car','Taco','Banana']

// simple way
function capitalizeFirst(arr) {
  if (arr.length === 1) {
    return [arr[0][0].toUpperCase() + arr[0].substr(1)];
  }
  let res = capitalizeFirst(arr.slice(0, -1));
  let string =
    arr.slice(arr.length - 1)[0][0].toUpperCase() +
    arr.slice(arr.length - 1)[0].substr(1);
  res.push(string);
  return res;
}

capitalizeFirst(["car", "taco", "banana"]); // ['Car','Taco','Banana']
```

11. Write a recursive function called `nestedEvenSum`. Return the sum of all even numbers in an object which may contain nested objects.
    `nestedEvenSum({a:2, b:3, c:{d:3}, e:10})` ---> 16
    `nestedEvenSum({a:2, b:{b:2}, c:{d:3}, e:10})` ---> 14

```js
function nestedEvenSum(obj, sum = 0) {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      sum += nestedEvenSum(obj[key]);
    } else if (obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }
  return sum;
}

nestedEvenSum({ a: 2, b: 3, c: { d: 3 }, e: 10 }); // 16
```

12. Write a recursive function called `capitalizeWords`. Given an array of words, return a new array containing each word capitalized.
    `capitalizeWords(['i', 'am', 'learning', 'recursion'])` ---> ['I', 'AM', 'LEARNING', 'RECURSION']

```js
function capitalizeWords(arr) {
  if (arr.length === 1) {
    return [arr[0].toUpperCase()];
  }
  let res = capitalizeWords(arr.slice(0, -1));
  res.push(arr.slice(arr.length - 1)[0].toUpperCase());
  return res;
}

capitalizeWords(["i", "am", "learning", "recursion"]); // ['I', 'AM', 'LEARNING', 'RECURSION']
```

13. Write a recursive function called `stringifyNumbers` which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!
    `stringifyNumbers({num:1, test:[], data:{val:4, info:{isRight:true, random:66}}})` ---> {num:"1", test:[], data:{val:"4", info:{isRight:true, random:"66"}}}

```js
function stringifyNumbers(obj) {
  let newObj = {};
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

stringifyNumbers({
  num: 1,
  test: [],
  data: { val: 4, info: { isRight: true, random: 66 } },
}); // {num:"1", test:[], data:{val:"4", info:{isRight:true, random:"66"}}}
```

14. Write a recursive function called `collectStrings` which accepts an object and returns an array of all the values in the object that have a typeof string.
    `collectStrings({stuff: "foo", data: {val: {thing: {info: "bar", moreInfo: {evenMoreInfo: {weMadeIt: "baz"}}}}}})` ---> ["foo", "bar", "baz"]

```js
function collectStrings(obj) {
  let newArr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      newArr.push(obj[key]);
    } else if (typeof obj[key] === "object") {
      newArr = newArr.concat(collectStrings(obj[key]));
    }
  }
  return newArr;
}

collectStrings({
  stuff: "foo",
  data: {
    val: {
      thing: { info: "bar", moreInfo: { evenMoreInfo: { weMadeIt: "baz" } } },
    },
  },
}); // ["foo", "bar", "baz"]
```
