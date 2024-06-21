### `Inheritance`:

    - Allows a new class (child) to inherit properties and methods from an existing class (parent).
    - Promotes code reuse and creates a hierarchical relationship between classes..
    - Example: A Student class inherits from a Person class, gaining all the common attributes and behaviors.
    - importance: `code reusability, extensibility, and maintainability`.

```js
class Person {
  // class means blueprint or template for creating objects
  // class will list data(attributes/properties) and methods(behaviors/functions) that an object can have
  // parent class
  constructor(name, age) {
    // constructor to initialize the properties
    // pass values to the constructor for any internal state that we want to initialize in new instances of the class
    this.name = name; // add a new property name
    this.age = age; // add a new property age
  }
  introduce() {
    // add a new method to the class Person to introduce itself
    console.log(`Hi, I'm ${this.name}`);
  }
}

class Student extends Person {
  // child class Student inherits from the parent class Person
  constructor(name, year) {
    // constructor to initialize the properties of the child class
    super(name); // call the parent class constructor and pass the name
    this.year = year; // add a new property
  }
  introduce() {
    // override the introduce method of the parent class
    console.log(`Hi, I'm ${this.name} and I'm in year ${this.year}`);
  }
}

const student = new Student("Bishal", 2021); // create a new object or instance of the class Student
console.log(student.introduce()); // call the introduce method of the class Student
```

```ts
class Person {
  name: string;
  age: number;
  // we need constructor to initialize the properties
  constructor(name: string, age: number) {
    // the `this` keyword refers to the current object
    this.name = name;
    this.age = age;
    // we have initialized the properties of the class
  }
  introduceSelf(): void {
    // void means the method does not return anything (no return statement)
    console.log(`Hi, I'm ${this.name}`);
  }
}

class Student extends Person {
  year: number;
  constructor(name: string, age: number, year: number) {
    super(name, age);
    this.year = year;
  }

  introduceSelf(): void {
    console.log(`Hi, I'm ${this.name} and I'm in year ${this.year}`);
  }
}

const student = new Student("Bishal", 21, 2021);
student.introduceSelf(); // Output: Hi, I'm Bishal and I'm in year 2021
```
