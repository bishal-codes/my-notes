### `Abstraction`:

             - Hides the complex implementation details of an object and only shows the necessary features of the object.
             - Allows the user to interact with the object without knowing its internal details.
             - Simplifies interaction with objects by providing a clear interface.
             - Example: A Vehicle class with a start method that hides the internal details of how the vehicle starts, A Database class with methods to connect, query, and update the database without revealing the underlying database management system,  A Shape class with an abstract method draw. Concrete classes like Circle and Rectangle implement the draw method.
             - importance: `code reusability, extensibility, and maintainability`.

```js
class Vehicle {
  start() {
    // abstract method to start the vehicle
    console.log("Starting the vehicle");
  }
}

class Car extends Vehicle {
  start() {
    // override the start method of the parent class
    console.log("Starting the car");
  }
}

class Bike extends Vehicle {
  start() {
    // override the start method of the parent class
    console.log("Starting the bike");
  }
}

const car = new Car();
car.start(); // call the start method of the class Car
const bike = new Bike();
bike.start(); // call the start method of the class Bike
```

```ts
abstract class Shape {
  abstract getArea(): number;
}

class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }
  getArea(): number {
    return this.width * this.height;
  }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(5, 10)];
// shapes.forEach(shape => {
//     console.log(shape.getArea());
// });
console.log(shapes[0].getArea()); // Output: 78.54
console.log(shapes[1].getArea()); // Output: 50
const circle = new Circle(5);
console.log(circle.getArea()); // Output: 78.54
const rectangle = new Rectangle(5, 10);
console.log(rectangle.getArea()); // Output: 50
```

### Delegation

- `Delegation` is a design pattern that allows an object to delegate some of its responsibilities to another object.
