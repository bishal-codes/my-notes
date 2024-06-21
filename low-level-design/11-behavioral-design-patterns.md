## Behavioral Design Patterns

- https://www.geeksforgeeks.org/behavioral-design-patterns/
- are concerned with the algorithms and the assignment of responsibilities between objects.
- not just describe patterns of objects or classes but also the patterns of communication between them.
- characterize complex control flow that's difficult to follow at runtime.
- help in defining how objects interact in a well-defined manner.

### Types of Behavioral Design Patterns

1. `Chain of Responsibility Pattern`

- allows an object to send request to other objects in a chain, without knowing which object will handle the request.
- allows an object to pass a request along a chain of handlers.
- each handler decides either to process the request or to pass it along the chain.
- loose coupling between sender and receiver of a request.
- dynamic chain
- single responsibility principle
- seqential order
- fallbac mechanism
- variations: unidirectional, bidirectional, circular, tree, linked list, etc.
- enhanced flexibility

`Imagine a customer service department with multiple levels of support staff, each responsible for handling different types of customer inquiries based on their complexity. The chain of responsibility can be illustrated as follows:

- Level 1: Basic Support Staff
- Level 2: Advanced Support Staff
- Level 3: Expert Support Staff`

```ts
abstract class SupportStaff {
  private next: SupportStaff;

  setNext(next: SupportStaff) {
    this.next = next;
  }

  handleRequest(request: string) {
    if (this.next) {
      this.next.handleRequest(request);
    }
  }
}

class BasicSupportStaff extends SupportStaff {
  handleRequest(request: string) {
    if (request === "Basic") {
      console.log("Basic support staff is handling the request");
    } else {
      super.handleRequest(request);
    }
  }
}

class AdvancedSupportStaff extends SupportStaff {
  handleRequest(request: string) {
    if (request === "Advanced") {
      console.log("Advanced support staff is handling the request");
    } else {
      super.handleRequest(request);
    }
  }
}

class ExpertSupportStaff extends SupportStaff {
  handleRequest(request: string) {
    if (request === "Expert") {
      console.log("Expert support staff is handling the request");
    } else {
      console.log("No support staff available to handle the request");
    }
  }
}

const basicSupportStaff = new BasicSupportStaff();
const advancedSupportStaff = new AdvancedSupportStaff();
const expertSupportStaff = new ExpertSupportStaff();

basicSupportStaff.setNext(advancedSupportStaff);
advancedSupportStaff.setNext(expertSupportStaff);

basicSupportStaff.handleRequest("Basic"); // Basic support staff is handling the request
basicSupportStaff.handleRequest("Advanced"); // Advanced support staff is handling the request
basicSupportStaff.handleRequest("Expert"); // Expert support staff is handling the request
basicSupportStaff.handleRequest("Unknown"); // No support staff available to handle the request
```

2. `Command Pattern`

- encapsulates a request as an object, thereby allowing for parameterization of clients with different requests, queuing of requests, and logging of requests.
- decouples the sender of a request from the receiver of the request.
- allows for the parameterization of clients with queues, requests, and operations.
- allows for the support of undoable operations.
- allows for the support of logging changes so that they can be reapplied in case of a system crash.
- allows for the support of transactional operations.
- allows for the support of macro commands.

`Imagine a remote control that can be used to turn on and off different electronic devices. The command pattern can be illustrated as follows:

- Command: Interface that declares a method for executing a command.
- ConcreteCommand: Class that implements the Command interface and contains the receiver object.
- Receiver: Class that performs the actual action when the command is executed.
- Invoker: Class that asks the command to carry out the request.

```ts
interface Command {
  execute(): void;
}

class Light {
  turnOn() {
    console.log("Light is on");
  }

  turnOff() {
    console.log("Light is off");
  }
}

class LightOnCommand implements Command {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute() {
    this.light.turnOn();
  }
}

class LightOffCommand implements Command {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute() {
    this.light.turnOff();
  }
}

class RemoteControl {
  private command: Command;

  setCommand(command: Command) {
    this.command = command;
  }

  pressButton() {
    this.command.execute();
  }
}

const light = new Light();
const lightOnCommand = new LightOnCommand(light);
const lightOffCommand = new LightOffCommand(light);

const remoteControl = new RemoteControl();
remoteControl.setCommand(lightOnCommand);
remoteControl.pressButton(); // Light is on
remoteControl.setCommand(lightOffCommand);
remoteControl.pressButton(); // Light is off
```

3. `Interpreter Pattern`

- defines a grammar for interpreting a language and provides an interpreter to interpret sentences in the language.
- used to define the grammar for simple languages and provide an interpreter to interpret the sentences in the language.
- used when the grammar of a language is simple and can be represented as a syntax tree.
- used when the efficiency of the interpreter is not a primary concern.
- used when the grammar is complex and changes frequently.
- used when the efficiency of the interpreter is a primary concern.

`Suppose we have a simple language that supports basic arithmetic operations, such as addition (+), subtraction (-), multiplication (*), and division (/). We want to create a calculator program that can interpret and evaluate arithmetic expressions written in this language.`

```ts
interface Expression {
  interpret(): number;
}

class NumberExpression implements Expression {
  private number: number;

  constructor(number: number) {
    this.number = number;
  }

  interpret() {
    return this.number;
  }
}

class AddExpression implements Expression {
  private expression1: Expression;
  private expression2: Expression;

  constructor(expression1: Expression, expression2: Expression) {
    this.expression1 = expression1;
    this.expression2 = expression2;
  }

  interpret() {
    return this.expression1.interpret() + this.expression2.interpret();
  }
}

class SubtractExpression implements Expression {
  private expression1: Expression;
  private expression2: Expression;

  constructor(expression1: Expression, expression2: Expression) {
    this.expression1 = expression1;
    this.expression2 = expression2;
  }

  interpret() {
    return this.expression1.interpret() - this.expression2.interpret();
  }
}

const expression = new AddExpression(
  new NumberExpression(5),
  new SubtractExpression(new NumberExpression(10), new NumberExpression(2))
);

console.log(expression.interpret()); // Output: 13
```

4. `Observer Pattern`

- defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.
- used when a change to one object requires changing others, and the number of objects to be changed is unknown.
- used when an object should be able to notify other objects without making assumptions about who these objects are.

`Let us Imagine a scenario where the weather station is observed by various smart devices. The weather station maintains a list of registered devices. When there’s a change in weather conditions, the weather station notifies all devices about the update.`

```ts
interface Observer {
  update(temperature: number): void;
}

class WeatherStation {
  private temperature: number;
  private observers: Observer[] = [];

  setTemperature(temperature: number) {
    this.temperature = temperature;
    this.notifyObservers();
  }

  addObserver(observer: Observer) {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer) {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers() {
    this.observers.forEach((observer) => observer.update(this.temperature));
  }
}

class SmartDevice implements Observer {
  private temperature: number;

  update(temperature: number) {
    this.temperature = temperature;
    this.display();
  }

  display() {
    console.log(`Temperature on smart device: ${this.temperature}`);
  }
}

const weatherStation = new WeatherStation();
const smartDevice1 = new SmartDevice();
const smartDevice2 = new SmartDevice();

weatherStation.addObserver(smartDevice1);
weatherStation.addObserver(smartDevice2);

weatherStation.setTemperature(25); // Temperature on smart device: 25
```
