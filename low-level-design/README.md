# Low Level Design LLD in System Design

- object-level designing or micro-level designing or detailed designing.
- component level design process that follows step by step refinement process. the input to LLd is the HLD and the output is the detailed design of the system.
- The main goal of the low-level design is to specify how each and every module of the requirement specification will be implemented.
- involves converting the high-level design into a more detailed blueprint, addressing specific algorithms, data structures, and interfaces.
- serves as a guide for developers during coding, ensuring the accurate and efficient implementation of the system’s functionality.
- describes class diagrams with the help of methods and relations between classes and program specs.

## Difference between HLD and LLD

- general system design where the system is broken down into smaller components and modules.
- here according to the business needs, and how system should work (in both functional and non-functional ways), the different frameworks, languages, and technologies, components and different databases are considered.
  - selection of components, platforms, frameworks, and technologies.
  - database design.
  - brief description of relationships between services and modules.

## How to form LLD from HLD

- input to LLD is HLD.
- in LLD, the main goal is to specify how components look like, the structure possessed by different entities, and how different entities (modules) will have their responsibilities(operations supported by them).
  - `Unified Modeling Language (UML) diagrams`
  - `OOPs (Object-Oriented Programming) concepts`
  - `SOLID` (Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, Dependency Inversion) principles

## Roadmap to LLD (Low Level Designing)

1.  Object-Oriented Programming Concepts:
    `Object-Oriented Programming is about modelling a system as a collection of objects where each object represents a particular aspect of the system. Objects contain both functions (methods) and data (attributes). An objects provides a public interface to other code that wants to use it but maintains its private, internal state; other parts of the system don't have to care about what is going on inside an object.`

    - fundamental paradigm for designing low-level systems
    - mastery of OOPs forms foundation for `building robust/efficient, scalable, and maintainable systems`.
    - user requirements

## Applications of OOPs

- `User interface design` such as windows and menus (encapsulation and abstraction): a system that allows users to interact with a computer or software application. e.g. web applications, mobile applications, etc.
- `Real time systems`(timeliness and time synchronization): any information processing system with hardware and software components that perform real-time application functions and can respond to events within predictable and specific time constraints. e.g. air traffic control systems, industrial control systems, robotics, etc.
- `client-server systems` (scalability and maintainability): a distributed application structure that partitions tasks or workloads between the providers of a resource or service, called servers, and service requesters, called clients. e.g. web applications, database management systems, etc.
- `hypertext and hypermedia systems` (linking and navigation): a system that allows users to create and follow references between multimedia documents, including text, images, audio, and video. e.g. web browsers, e-books, etc.
- `object-oriented database` (data modeling and management): a database management system in which information is represented in the form of objects as used in object-oriented programming. e.g. MongoDB, object-oriented databases, object-relational databases, etc.
- `Neural networks and parallel programming` (modularity and reusability): a computer system modeled on the human brain and nervous system, designed to recognize patterns. e.g. artificial intelligence, machine learning, etc.
- `AI expert systems` (knowledge representation and reasoning): a computer system that emulates the decision-making ability of a human expert. e.g. medical diagnosis, financial planning, etc.
- `Simulation and Modeling System` (abstraction and encapsulation): a computer system that models the behavior of a real-world system or process. e.g. flight simulators, weather forecasting, etc.
- `Office Automation Systems` (inheritance and polymorphism): a computer system that automates office operations and procedures. e.g. word processing, spreadsheets, etc.
- `CIM(Computer Integrated Manufacturing)/CAD(Computer-Aided Design)/CAM(Computer-Aided Manufacturing)` (inheritance and polymorphism): a computer system that integrates manufacturing operations and procedures. e.g. computer-aided design, computer-aided manufacturing, etc.
- `Computer-Aided Design (CAD)` (inheritance and polymorphism): a computer system that assists in the creation, modification, analysis, or optimization of a design. e.g. architectural design, engineering design, etc.

- https://medium.com/swlh/applying-oop-in-real-world-applications-495c8ee4d946

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

### `Encapsulation`:

- Bundles data (attributes) and methods (behaviors) that operate on the data into a single unit (class).
- Hides the internal state of an object from the outside world.
- Only allows manipulation of the object's data through its methods, maintaining integrity.
- Example: A Car class encapsulates the properties and methods that define a car, A Student class with private properties and public methods to access and modify these properties.
- importance: `data security, data integrity, and code maintainability`.

```js
class Student {
  #name; // private property, # indicates private property
  #age; // private property
  // if use _name, it means protected property
  constructor(name, age) {
    this.#name = name; // set the private property name
    this.#age = age; // set the private property age
  }
  getName() {
    // public method to get the private property name
    return this.#name;
  }
  setName(name) {
    // public method to set the private property name
    this.#name = name;
  }
  getAge() {
    // public method to get the private property age
    return this.#age;
  }
  setAge(age) {
    // public method to set the private property age
    this.#age = age;
  }
}

const student = new Student("Bishal", 21);
console.log(student.getName()); // get the name
student.setName("John"); // set the name
console.log(student.getName()); // get the name
```

```ts
class bankAccount {
  private accountNumber: number;
  private accountHolderName: string;
  private balance: number;

  constructor(
    accountNumber: number,
    accountHolderName: string,
    balance: number
  ) {
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.balance = balance;
  }

  getAccountNumber(): number {
    return this.accountNumber;
  }

  getAccountHolderName(): string {
    return this.accountHolderName;
  }

  getBalance(): number {
    return this.balance;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  withdraw(amount: number): void {
    if (amount > this.balance) {
      console.log("Insufficient balance");
    } else {
      this.balance -= amount;
    }
  }

  displayBalance(): void {
    console.log(`Account balance: ${this.balance}`);
  }
}

const account = new bankAccount(123456, "John Doe", 1000);
account.deposit(500);
account.withdraw(200);
account.displayBalance(); // Output: Account balance: 1300
```

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

2.  Process of analyzing and designing

- In analyzing phase, the problems are clayed out into the object-world problems using OOPs and SOLID principles.

3.  Design Patterns

- `Design patterns` are reusable solutions to common problems in software design. They are templates that can be applied to different situations to solve similar problems. Design patterns help streamline the development process, promote code reuse, and enhance the overall quality of software systems.

## Why Design Patterns?

- speed up the development process by providing tested, proven development paradigms.
- are programming language-independent strategies for solving common object-oriented design problems.
- represents an idea not a particular implementation. (make code more flexible, reusable, and maintainable)
- are meant for common problem solving and not for project development.

## Importance of Design Patterns

- `Problem-solution Approach`: identify common problems and provide proven solutions.
- `abstraction`: abstract the complexity of the system and focus on the key aspects or high-level design concepts.
- `proven solutions`: design patterns are tried and tested solutions to common problems in software design.
- `Code Reusability`: Design patterns promote code reuse by providing proven solutions to common problems.
- `Scalability`: Design patterns help in building scalable systems that can handle increased loads and user requests.
- `Maintainability`: Design patterns improve the maintainability of software systems by providing a clear structure and organization.
- `Communication or common vocabulary`: Design patterns provide a common language and vocabulary for developers to communicate and collaborate effectively.

## Types of Design Patterns

- `Creational Design Patterns`:

  - abstract the instantiation process, making the system independent of how its objects are created, composed, and represented.
  - `Class Creational Patterns`: uses inheritance to vary the class that's instantiated.
  - `Object Creational Patterns`: delegate instantiation to another object.
  - creational design patterns encapsulate knowledge about which concrete classes the system uses.
  - patterns hide how instances of classes are created and composed.

    - `Factory Design Pattern`:

      - defines an interface for creating an object, but lets subclasses decide which class to instantiate.
      - when creating objects, where the exact class of object is not known and decided at runtime.

      ```ts
      class Shape {
        draw(): void {
          console.log("Drawing a shape");
        }
      }

      class Circle extends Shape {
        draw(): void {
          console.log("Drawing a circle");
        }
      }

      class Rectangle extends Shape {
        draw(): void {
          console.log("Drawing a rectangle");
        }
      }

      class ShapeFactory {
        getShape(type: string): Shape {
          if (type === "circle") {
            return new Circle();
          } else if (type === "rectangle") {
            return new Rectangle();
          } else {
            return null;
          }
        }
      }

      const shapeFactory = new ShapeFactory();
      const circle = shapeFactory.getShape("circle");
      circle.draw(); // Output: Drawing a circle
      const rectangle = shapeFactory.getShape("rectangle");
      rectangle.draw(); // Output: Drawing a rectangle
      ```

    - `Abstract Factory Design Pattern`:
      - provides an interface to create families of related or dependent objects without specifying their concrete classes.
      - way of organizing how group of things are created together.
      - When families of related objects need to be created without specifying their concrete classes.

    ```ts
    interface Shape {
      draw(): void;
    }

    class Circle implements Shape {
      draw(): void {
        console.log("Drawing a circle");
      }
    }

    class Rectangle implements Shape {
      draw(): void {
        console.log("Drawing a rectangle");
      }
    }

    interface ShapeFactory {
      createCircle(): Shape;
      createRectangle(): Shape;
    }

    class ConcreteShapeFactory implements ShapeFactory {
      createCircle(): Shape {
        return new Circle();
      }
      createRectangle(): Shape {
        return new Rectangle();
      }
    }

    const shapeFactory = new ConcreteShapeFactory();
    const circle = shapeFactory.createCircle();
    circle.draw(); // Output: Drawing a circle
    const rectangle = shapeFactory.createRectangle();
    rectangle.draw(); // Output: Drawing a rectangle

    interface Button {
      render(): void;
    }

    class WindowsButton implements Button {
      render() {
        console.log("Render Windows button");
      }
    }

    class MacOSButton implements Button {
      render() {
        console.log("Render MacOS button");
      }
    }

    abstract class GUIFactory {
      abstract createButton(): Button;
    }

    class WindowsFactory extends GUIFactory {
      createButton(): Button {
        return new WindowsButton();
      }
    }

    class MacOSFactory extends GUIFactory {
      createButton(): Button {
        return new MacOSButton();
      }
    }

    const factory: GUIFactory = new WindowsFactory();
    const button = factory.createButton();
    button.render(); // Render Windows button
    ```

    - `Singleton Design Pattern`:

      - ensures a class has only one instance and provides a global point of access to it.
      - when only one instance of a class is needed to control actions throughout a system.
      - when a single object is required to coordinate actions across the system.

      ```ts
      class Singleton {
        private static instance: Singleton;
        private constructor() {
          // private constructor to prevent instantiation
        }
        static getInstance(): Singleton {
          if (!Singleton.instance) {
            Singleton.instance = new Singleton();
          }
          return Singleton.instance;
        }
      }

      const singleton1 = Singleton.getInstance();
      const singleton2 = Singleton.getInstance();
      console.log(singleton1 === singleton2); // Output: true
      ```

      - `Prototype Design Pattern`:

        - creates new objects by copying an existing object, known as the prototype.
        - when creating new objects is more expensive than copying existing objects.
        - when the classes to instantiate are specified at runtime.

      ```ts
      class Shape {
        draw(): void {
          console.log("Drawing a shape");
        }
        clone(): Shape {
          return Object.create(this);
        }
      }

      class Circle extends Shape {
        draw(): void {
          console.log("Drawing a circle");
        }
      }

      class Rectangle extends Shape {
        draw(): void {
          console.log("Drawing a rectangle");
        }
      }

      const circle = new Circle();
      const clonedCircle = circle.clone();
      clonedCircle.draw(); // Output: Drawing a circle
      const rectangle = new Rectangle();
      const clonedRectangle = rectangle.clone();
      clonedRectangle.draw(); // Output: Drawing a rectangle
      ```

      - `Builder Design Pattern`:

        - constructs complex objects step by step, allowing the construction process to vary independently from the object being constructed.
        - when the construction of an object involves multiple steps and the order of construction is important.
        - when the construction process must allow different representations of the object that is constructed.

      ```ts
      class Product {
        parts: string[] = [];
        addPart(part: string): void {
          this.parts.push(part);
        }
        show(): void {
          console.log(`Product parts: ${this.parts.join(", ")}`);
        }
      }

      interface Builder {
        buildPartA(): void;
        buildPartB(): void;
        buildPartC(): void;
        getResult(): Product;
      }

      class ConcreteBuilder implements Builder {
        private product: Product = new Product();
        buildPartA(): void {
          this.product.addPart("Part A");
        }
        buildPartB(): void {
          this.product.addPart("Part B");
        }
        buildPartC(): void {
          this.product.addPart("Part C");
        }
        getResult(): Product {
          return this.product;
        }
      }

      class Director {
        private builder: Builder;
        constructor(builder: Builder) {
          this.builder = builder;
        }
        construct(): Product {
          this.builder.buildPartA();
          this.builder.buildPartB();
          this.builder.buildPartC();
          return this.builder.getResult();
        }
      }

      const builder = new ConcreteBuilder();
      const director = new Director(builder);
      const product = director.construct();
      product.show(); // Output: Product parts: Part A, Part B, Part C
      ```

- `Structural Design Patterns`:

  - concerned with how classes and objects can be composed to form larger structures.
  - deal with object composition or the relationship between entities.
  - help ensure that if one part of a system changes, the entire system doesn’t need to change too.

    - `Adapter Design Pattern`:

      - allows objects with incompatible interfaces to work together.
      - when the client expects a target interface and the adaptee provides a different interface.
      - when the client expects a target interface and the adaptee provides a different interface.

      ```ts
      interface Target {
        request(): void;
      }

      class Adaptee {
        specificRequest() {
          console.log("Specific request");
        }
      }

      class Adapter implements Target {
        private adaptee: Adaptee;

        constructor(adaptee: Adaptee) {
          this.adaptee = adaptee;
        }

        request() {
          this.adaptee.specificRequest();
        }
      }

      const adaptee = new Adaptee();
      const adapter = new Adapter(adaptee);
      adapter.request(); // Specific request
      ```

      - `Bridge Design Pattern`:

        - decouples an abstraction from its implementation so that the two can vary independently.
        - when changes in the implementation of an abstraction should not affect clients.
        - when the abstraction and its implementation should be extensible by subclassing.

      ```ts
      interface Implementor {
        operationImpl(): void;
      }

      class ConcreteImplementorA implements Implementor {
        operationImpl() {
          console.log("ConcreteImplementorA operation");
        }
      }

      class ConcreteImplementorB implements Implementor {
        operationImpl() {
          console.log("ConcreteImplementorB operation");
        }
      }

      class Abstraction {
        protected implementor: Implementor;

        constructor(implementor: Implementor) {
          this.implementor = implementor;
        }

        operation() {
          this.implementor.operationImpl();
        }
      }

      const abstractionA = new Abstraction(new ConcreteImplementorA());
      abstractionA.operation(); // ConcreteImplementorA operation

      const abstractionB = new Abstraction(new ConcreteImplementorB());
      abstractionB.operation(); // ConcreteImplementorB operation
      ```

- `Behavioral Design Patterns`:

4.  UML Diagrams
5.  SOLID Principles

- `Step 1`: Understand the requirements and constraints.
- `Step 2`: Define the class diagram.
- `Step 3`: Define the relationship between classes.
- `Step 4`: Define the methods and attributes of classes.
- `Step 5`: Define the data structures.
- `Step 6`: Define the algorithms.
- `Step 7`: Define the interfaces.
- `Step 8`: Define the database schema.
- `Step 9`: Define the error handling mechanism.
- `Step 10`: Define the security mechanism.
- `Step 11`: Define the logging mechanism.
- `Step 12`: Define the performance tuning mechanism.
- `Step 13`: Define the testing mechanism.
