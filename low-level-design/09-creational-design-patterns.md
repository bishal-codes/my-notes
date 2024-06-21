## Creational Design Patterns

- abstract the instantiation process, making the system independent of how its objects are created, composed, and represented.
- `Class Creational Patterns`: uses inheritance to vary the class that's instantiated.
- `Object Creational Patterns`: delegate instantiation to another object.
- creational design patterns encapsulate knowledge about which concrete classes the system uses.
- patterns hide how instances of classes are created and composed.
- use cases:

  - `Factory Design Pattern`:

    - defines an interface for creating an object, but lets subclasses decide which class to instantiate.
    - when creating objects, where the exact class of object is not known and decided at runtime.
    - use cases:
      - creational frameworks: JDBC, spring, Guice
      - gui toolkits
      - logging frameworks
      - serialization and deserialization
      - plugin systems
      - game development
      - web development

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
    - use cases:
      - database connections
      - configuration management
      - gui components
      - device managers
      - printing services

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
