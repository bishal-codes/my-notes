### `Polymorphism`:

      - Allows objects of different classes to be treated as objects of a common superclass or Enables objects to be treated as instances of their parent class rather than their actual class.
      - Enables a single interface to represent multiple types.
      - Supports method overriding (runtime polymorphism) and method overloading (compile-time polymorphism).
      - Example: A Shape class with a draw method that is overridden by Circle, Rectangle, and Triangle classes, Both Professor and Student classes have an introduceSelf method, but each provides its own implementation.
      - importance: `code reusability, extensibility, and maintainability`.

```js
class Shape {
  draw() {
    // abstract method to draw a shape
    console.log("Drawing a shape");
  }
}

class Circle extends Shape {
  draw() {
    // override the draw method of the parent class
    console.log("Drawing a circle");
  }
}

class Rectangle extends Shape {
  draw() {
    // override the draw method of the parent class
    console.log("Drawing a rectangle");
  }
}

class Triangle extends Shape {
  draw() {
    // override the draw method of the parent class
    console.log("Drawing a triangle");
  }
}

const circle = new Circle();
circle.draw(); // call the draw method of the class Circle
const rectangle = new Rectangle();
rectangle.draw(); // call the draw method of the class Rectangle
const triangle = new Triangle();
triangle.draw(); // call the draw method of the class Triangle
```

```js
class Person {
  introduceSelf() {
    return "I'm a person.";
  }
}

class Student extends Person {
  introduceSelf() {
    return "I'm a student.";
  }
}

class Professor extends Person {
  introduceSelf() {
    return "I'm a professor.";
  }
}

const people = [new Person(), new Student(), new Professor()];
people.forEach((person) => {
  console.log(person.introduceSelf());
});
// Output:
// I'm a person.
// I'm a student.
// I'm a professor.
```

#### Compile-time (Static) Polymorphism (method overloading)

- `Method overloading` is a feature that allows a class to have more than one method with the same name but with different parameters.
- The method to be called is determined at compile-time based on the number and type of arguments passed to the method.
- Example: A Calculator class with multiple add methods that accept different numbers of arguments, A Math class with multiple multiply methods that accept different data types.
- importance: `code reusability, extensibility, and maintainability`.

```ts
class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }
  add(a: number, b: number, c: number): number {
    return a + b + c;
  }
  add(a: string, b: string, c: string): string {
    return a + b + c;
  }
  add(a: any, b: any): any {
    return a + b;
  }
}

const calculator = new Calculator();
console.log(calculator.add(1, 2)); // Output: 3
console.log(calculator.add(1, 2, 3)); // Output: 6
console.log(calculator.add("Hello", " ", "World")); // Output: Hello World
console.log(calculator.add(1, "2")); // Output: 12
```

#### Runtime Polymorphism (method overriding)

- `Method overriding` is a feature that allows a subclass to provide a specific implementation of a method that is already provided by its parent class.
- The method to be called is determined at runtime based on the object's type.
- Example: A Vehicle class with a start method that is overridden by Car and Bike classes, A Animal class with a speak method that is overridden by Dog and Cat classes.

```ts
class Vehicle {
  start(): void {
    console.log("Starting the vehicle");
  }
}

class Car extends Vehicle {
  start(): void {
    console.log("Starting the car");
  }
}

class Bike extends Vehicle {
  start(): void {
    console.log("Starting the bike");
  }
}

const car: Vehicle = new Car();
car.start(); // Output: Starting the car
const bike: Vehicle = new Bike();
bike.start(); // Output: Starting the bike
```
