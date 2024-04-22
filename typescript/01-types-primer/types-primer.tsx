// Types bridge the gap between the code developers write and the code the computer understands
//  - can be used as meaningful definition
//  - can provide type checking at compile time
//  - allow for static typing, dynamic typing
//  - more types used, more information typescript have to check the code for errors

// 1. Types by Inference ----------------------------------------------------------------------------------------------------
let message = "Hello World"; // typescript will automatically  infer that this is a string type: let message = string

// 2. Defining Types --------------------------------------------------------------------------------------------------------

// to create an object with inferred type:
const user = {
  name: "John",
  id: "123",
};

// to explicitly define object's shape - USE INTERFACE
interface User {
  name: string;
  id: number;
}

// to declare that JS object conforms the shape constraints of new Interface
const userOne: User = {
  name: "John",
  //   id: "123", // Type 'string' is not assignable to type 'number'.ts(2322)
  id: 2,
};

// for classes and oop
class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const userTwo: User = new UserAccount("John Doe", 94);

// can use INTERFACE to annotate in parameters and return values to functions
function deleteUser(user: User) {
  //   console.log(`Deleting user`);
}

// if not returned anything:  A function whose declared type is neither 'undefined', 'void', nor 'any' must return a value.ts(2355
// function getUser(): User {}

function getAdminUser(): User {
  return {
    name: "Jane",
    id: 786,
  };
}

// 3. Composing Types ---------------------------------------------------------------------------------------------------------------------------
// - with unions, declare that type could be of any type ------------------------------------------------------------------
type MyBoolean = true | false; // on hovering, it is classed as boolean (property of Structured type system)
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "Locked" | "Unlocked";
type PositiveOddNumbers = 1 | 3 | 5 | 7 | 9;

// Union provides way to handle different types
function getLength(obj: string | string[]) {
  return obj.length;
}

// to get the type of variable, use typeof
// | type | predicate |
// | ---- | ---------|
// | string | typeof s === "string" |
// | number | typeof x === "number" |
// | boolean |  typeof z === "boolean" |
// | undefined | typeof  u === "undefined" |
// | function | typeof f === "function" |
// | array |  Array.isArray(x) |

// e.g., function returning different value depending on passed  argument(string or array)
function wrapInArray(item: string | string[]) {
  if (typeof item === "string") {
    return [item]; // on hover: (parameter) item: string
  }
  return item; // on hover: (parameter) item: string[]
}

// - with generics, provides variables to types --------------------------------------------------------------
type StringArr = Array<string>;
type NumberArr = Array<number>;
type ObjWithNameArr = Array<{ name: string }>;

// declare own types using generics
interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}

declare const backpack: Backpack<string>;
const obj = backpack.get(); // on hover: (return) Type: string

// 4. Structural Type System (TypeScript's Core Principles - type checking focuses on the shape that values have called duck typing or structural typing0)
interface Point {
  x: number;
  y: number;
}

function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}

const point = { x: 12, y: 26 };
logPoint(point);

const point3 = { x: 5, y: 7 };
logPoint(point3);

const rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect);

const color = { hex: "#FFF" };
// logPoint(color); // Argument of type '{ hex: string; }' is not assignable to parameter of type 'Point'. Type '{ hex: string; }' is missing the following properties from type 'Point': x, yts(2345)

// oop and classes
class VirtualPoint {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const newVirtualPoint = new VirtualPoint(13, 45);
logPoint(newVirtualPoint);
