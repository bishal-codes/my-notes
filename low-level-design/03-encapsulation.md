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
