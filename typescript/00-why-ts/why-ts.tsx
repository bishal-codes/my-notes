// - provides all of JavaScript's features
// - provides an additional layer on top of JavaScript: TypeScript's type system
let name = "John"; // string data type: JavaScript doesn't check  the variable's datatype, TypeScript does

// - highlight the unexpected behavior in code, lowering the chance of bugs

// function popUp(msg, options) {}

// in the above code example, we don't have more information available in this code other than function is popUp and it has two parameters
// 1. what is msg? what kind of data it is?
// 2. what is options?

// --------------------------- JavaScript ----------------------------------
function PopUpFunc(msg, options) {
  const defaultOptions = {
    kind: "info",
    timeout: 5000,
  };

  const msgOptions = Object.assign({}, defaultOptions, options);
  {
    // validate "kind" property in the options object
    if (typeof msgOptions.kind !== "string") {
      throw new Error('The "kind" option must be a string.');
    }

    const kinds = ["info", "warn", "error"];
    if (!kinds.includes(msgOptions.kind)) {
      throw new RangeError(
        `Invalid value for the "kind" option: "${msgOptions.kind}"`
      );
    }

    // validate timeout
    if (typeof msgOptions.timeout !== "number") {
      throw new TypeError('The "timeout" option must be a number.');
    }
    if (msgOptions.timeout < 0) {
      throw new RangeError('The "timeout" option cannot be negative.');
    }

    // validate msg
    if (typeof msg !== "string") {
      throw new Error(`"msg" must  be a string.`);
    }
  }
  // actual code
}
// --------------------------- JavaScript End ----------------------------------

// --------------------------- TypeScript ----------------------------------
// ----------- 1. less code -------------------
// ----------- 2. reusable code ---------------
export class Milliseconds {
  private readonly _n: number;
  constructor(_n: number) {
    if (_n < 0) {
      throw new Error("Millisecond number must be positive");
    } else {
      this._n = _n;
    }
  }
  get n(): number {
    return this._n;
  }
}
// ----------- reusable code ---------------

const kinds = ["info", "warn", "error"] as const;
type PopUpKind = (typeof kinds)[number];

interface popUpOptions {
  kind: PopUpKind;
  timeout: Milliseconds;
}

export function popUp(msg: string, options: popUpOptions) {
  const defaultOption: popUpOptions = {
    // --------- 3. provide live suggestions in code editor
    // --------- 4. type checking and number of  field that  the function expects - static checking (detecting error in code without even running) and
    // static type checking: determining error based on the kinds of values being operated
    //  typed superset of JavaScript: syntax, types
    // runtime behavior
    // erased types once typescript's compiler is done and produces the  final JS version
    // --------- 5. provide all kinds of options property that can be created
    // --------- 6. this makes development easier and time-saver
    // --------- 7. more reliable code  because you know what to expect from an object or all the code code is checked automatically
    kind: "info",
    timeout: new Milliseconds(5000),
  };
}
// --------------------------- TypeScript End ----------------------------------
