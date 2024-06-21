## Structural Design Patterns

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

    - `Composite Design Pattern`:

      - composes objects into tree structures to represent part-whole hierarchies.
      - when clients should treat individual objects and compositions of objects uniformly.
      - when the composition of objects should be represented as a tree structure.

    ```ts
    interface Component {
      operation(): void;
    }

    class Leaf implements Component {
      operation() {
        console.log("Leaf operation");
      }
    }

    class Composite implements Component {
      private children: Component[] = [];

      add(component: Component) {
        this.children.push(component);
      }

      operation() {
        this.children.forEach((child) => child.operation());
      }
    }

    const leaf1 = new Leaf();
    const leaf2 = new Leaf();
    const composite = new Composite();
    composite.add(leaf1);
    composite.add(leaf2);
    composite.operation(); // Leaf operation, Leaf operation
    ```

    - `Decorator Design Pattern`:

      - attaches additional responsibilities to an object dynamically.
      - when extending functionality using subclassing is impractical or when there are too many subclasses.
      - when the behavior of objects should be modified without affecting other objects.
      - example: `InputStream` and `OutputStream` classes in Java I/O classes.
      - use cases:
        - extending functionality
        - multiple combinations of objects or features
        - legacy code integration
        - gui components
        - input/output streams

    ```ts
    interface Component {
      operation(): void;
    }

    class ConcreteComponent implements Component {
      operation() {
        console.log("ConcreteComponent operation");
      }
    }

    class Decorator implements Component {
      protected component: Component;

      constructor(component: Component) {
        this.component = component;
      }

      operation() {
        this.component.operation();
      }
    }

    class ConcreteDecoratorA extends Decorator {
      // class a extends b means a is a b
      operation() {
        super.operation();
        console.log("ConcreteDecoratorA operation");
      }
    }

    class ConcreteDecoratorB extends Decorator {
      operation() {
        super.operation();
        console.log("ConcreteDecoratorB operation");
      }
    }

    const component = new ConcreteComponent();
    const decoratorA = new ConcreteDecoratorA(component);
    const decoratorB = new ConcreteDecoratorB(decoratorA);
    decoratorB.operation(); // ConcreteComponent operation, ConcreteDecoratorA operation, ConcreteDecoratorB operation
    ```

    - `Facade Design Pattern`:

      - provides a unified interface to a set of interfaces in a subsystem.
      - when a complex system is difficult to understand or subsystems are complex.
      - when there are many dependencies between clients and the implementation classes.
      - when the system is very complex or difficult to understand.
      - example: `jQuery` library in JavaScript.
      - use cases:
        - simplifying complex systems
        - providing a unified interface to a set of interfaces
        - decoupling clients from subsystems
        - integrating with third-party libraries and multiple apis
        - building legacy systems

    ```ts
    class SubsystemA {
      operationA() {
        console.log("SubsystemA operation");
      }
    }

    class SubsystemB {
      operationB() {
        console.log("SubsystemB operation");
      }
    }

    class Facade {
      private subsystemA: SubsystemA;
      private subsystemB: SubsystemB;

      constructor() {
        this.subsystemA = new SubsystemA();
        this.subsystemB = new SubsystemB();
      }

      operation() {
        this.subsystemA.operationA();
        this.subsystemB.operationB();
      }
    }

    const facade = new Facade();
    facade.operation(); // SubsystemA operation, SubsystemB operation
    ```

    - `Flyweight Design Pattern`:

      - minimizes memory usage or computational expenses by sharing as much as possible with related objects.
      - when a large number of similar objects need to be created.
      - when the overhead of creating and maintaining a large number of similar objects is high.
      - when the objects share state that can be extracted and shared.
      - example: `String` class in Java.
      - use cases:
        - memory optimization
        - performance optimization
        - caching
        - string interning
        - database connection pooling

    ```ts
    class Flyweight {
      private sharedState: string;

      constructor(sharedState: string) {
        this.sharedState = sharedState;
      }

      operation(uniqueState: string) {
        console.log(`Flyweight: ${this.sharedState}, ${uniqueState}`);
      }
    }

    class FlyweightFactory {
      private flyweights: { [key: string]: Flyweight } = {};

      getFlyweight(sharedState: string) {
        if (!this.flyweights[sharedState]) {
          this.flyweights[sharedState] = new Flyweight(sharedState);
        }
        return this.flyweights[sharedState];
      }
    }

    const factory = new FlyweightFactory();
    const flyweight1 = factory.getFlyweight("sharedState1");
    flyweight1.operation("uniqueState1"); // Flyweight: sharedState1, uniqueState1
    ```

    - `Proxy Design Pattern`:

      - provides a surrogate or placeholder for another object to control access to it.
      - when an object needs to be accessed remotely.
      - when the object is expensive to create.
      - when the object needs to be protected.
      - when the object needs lazy initialization.
      - example: `java.lang.reflect.Proxy` class in Java.
      - use cases:
        - remote proxy
        - virtual proxy
        - protection proxy
        - smart reference
        - caching proxy
        - logging proxy
        - synchronization proxy

    ```ts
    interface Subject {
      request(): void;
    }

    class RealSubject implements Subject {
      request() {
        console.log("RealSubject request");
      }
    }

    class Proxy implements Subject {
      private realSubject: RealSubject;

      request() {
        if (!this.realSubject) {
          this.realSubject = new RealSubject();
        }
        this.realSubject.request();
      }
    }

    const proxy = new Proxy();
    proxy.request(); // RealSubject request
    ```
