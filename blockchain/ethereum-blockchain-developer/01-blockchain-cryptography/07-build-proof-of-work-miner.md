# Proof of Work Miner

`Add transaction to mempool` ---> `Mine a block` ---> `Block hash` ---> `Mine transaction` ---> `Target difficulty`

This miner will receive transactions from the network and add them to its mempool.

When a block is ready to be mined, the miner will take those transactions from the mempool and include them into the mined block.

The miner will also calculate a basic proof of work below a constant `TARGET_DIFFICULTY`.

1. Mempool

Users who want to make transactions will broadcast their transactions to the blockchain network. The mempool is a place for miners to keep those transactions before adding them to a block.

Typically, the miner will take all the transactions with the highest transaction fees from the mempool. Then they'll add them to the block and attempt to find the proof of work.

📖 You can find more information on bitcoin miner fee priority [here](https://en.bitcoin.it/wiki/Miner_fees#Priority_transactions).

### 🏁 Your Goal: Add Transaction

Your goal is to implement the `addTransaction` function, which adds transactions to the mempool.

    - Take the `transaction` sent to the function and push it on top of the `mempool` array.

```js
// test.js
const { assert } = require("chai");
const { addTransaction, mempool } = require("../index");

describe("addTransaction", () => {
  it("should add the transaction to the mempool", () => {
    const transaction = { to: "bob", sender: "alice" };
    addTransaction(transaction);
    assert.equal(mempool.length, 1);
    assert.equal(mempool[0], transaction);
  });
});
```

```js
// index.js
const SHA256 = require("crypto-js/sha256");
const TARGET_DIFFICULTY =
  BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTransaction(transaction) {
  // TODO: add transaction to mempool
  // Check if the mempool is not full (MAX_TRANSACTIONS) before adding the transaction
  if (mempool.length < MAX_TRANSACTIONS) {
    mempool.push(transaction);
  } else {
    console.log("Mempool is full. Cannot add more transactions.");
  }
}

function mine() {
  // TODO: mine a block
}

module.exports = {
  TARGET_DIFFICULTY,
  MAX_TRANSACTIONS,
  addTransaction,
  mine,
  blocks,
  mempool,
};
```

2. Mining Blocks

In Bitcoin, blocks contain quite a bit of information in their header: `the software version`, `a timestamp`, `the merkle root` of its transactions, the `previous block hash`, and the `difficulty`.

#### 🏁 Your Goal: Mine Block

The goal of this stage is to update the mine() fuction to create a new block with a unique identifier and add it to our blocks array.

For the purposes of this mining exercise, our block will be an object with a single property: an id that is equal to the block height prior to it being mined.

- Update the `mine()` function to create a new block object with a single property: `id`
- Set the `id` property to the block height prior to the new block being added
- Push the block object into the `blocks` array

```js
// test.js
const { assert } = require("chai");
const { mine, blocks } = require("../index");
const SHA256 = require("crypto-js/sha256");

describe("mine", () => {
  describe("first block", () => {
    let hash;
    before(() => {
      hash = mine();
    });
    it("should add to the blocks", () => {
      assert.equal(blocks.length, 1);
    });
    it("should store the expected id", () => {
      const lastBlock = blocks[blocks.length - 1];
      assert(lastBlock.id != null, "did not find an id property on the block");
      assert.equal(lastBlock.id, 0);
    });
  });
  describe("second block", () => {
    let hash;
    before(() => {
      hash = mine();
    });
    it("should add to the blocks", () => {
      assert.equal(blocks.length, 2);
    });
    it("should store the expected id", () => {
      const lastBlock = blocks[blocks.length - 1];
      assert(lastBlock.id != null, "did not find an id property on the block");
      assert.equal(lastBlock.id, 1);
    });
  });
});
```

```js
// index.js
const SHA256 = require("crypto-js/sha256");
const TARGET_DIFFICULTY =
  BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTransaction(transaction) {
  // TODO: add transaction to mempool
  // Check if the mempool is not full (MAX_TRANSACTIONS) before adding the transaction
  if (mempool.length < MAX_TRANSACTIONS) {
    mempool.push(transaction);
  } else {
    console.log("Mempool is full. Cannot add more transactions.");
  }
}

function mine() {
  // TODO: mine a block
  // Create a new block with a unique identifier (block height prior to adding it)
  const block = { id: blocks.length };

  // Increment the block height for the next block
  // blockHeight++;

  // Add the new block to the blocks array
  blocks.push(block);
}

module.exports = {
  TARGET_DIFFICULTY,
  MAX_TRANSACTIONS,
  addTransaction,
  mine,
  blocks,
  mempool,
};
```

3. Block Hash

Typically, all the information in the header of the block is hashed together to create a unique hash based on those properties.

If anything changes in the header, it will affect the hash. Since each block also contains the hash of the block before it, it will affect every future block as well.

#### 🏁 Your Goal: Add the Hash

- Stringify the block object using JSON.stringify
- Take the SHA256 hash of the stringified block object
- Set the resulting value to a hash property on the mined block just before mining it

`⚠️ Do not add the hash property on the block until after calculating the hash!`

```js
// test.js
const { assert } = require("chai");
const { mine, blocks } = require("../index");
const SHA256 = require("crypto-js/sha256");

describe("mine", () => {
  describe("first block", () => {
    let hash;
    before(() => {
      hash = mine();
    });
    it("should add to the blocks", () => {
      assert.equal(blocks.length, 1);
    });
    it("should return the expected hash", () => {
      const expectedHash = SHA256(JSON.stringify({ id: 0 }));
      const lastBlock = blocks[blocks.length - 1];
      assert(lastBlock.hash, "did not find a hash property on the block");
      assert.equal(lastBlock.hash.toString(), expectedHash.toString());
    });
  });
  describe("second block", () => {
    let hash;
    before(() => {
      hash = mine();
    });
    it("should add to the blocks", () => {
      assert.equal(blocks.length, 2);
    });
    it("should return the expected hash", () => {
      const expectedHash = SHA256(JSON.stringify({ id: 1 }));
      const lastBlock = blocks[blocks.length - 1];
      assert(lastBlock.hash, "did not find a hash property on the block");
      assert.equal(lastBlock.hash.toString(), expectedHash.toString());
    });
  });
});
```

```js
// index.js
const SHA256 = require("crypto-js/sha256");
const TARGET_DIFFICULTY =
  BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTransaction(transaction) {
  // TODO: add transaction to mempool
  // Check if the mempool is not full (MAX_TRANSACTIONS) before adding the transaction
  if (mempool.length < MAX_TRANSACTIONS) {
    mempool.push(transaction);
  } else {
    console.log("Mempool is full. Cannot add more transactions.");
  }
}

function mine() {
  // TODO: mine a block
  // Create a new block with a unique identifier (block height prior to adding it)
  const block = { id: blocks.length };

  // stringify the block object
  const blockStr = JSON.stringify(block);

  // Calculate the SHA256 hash of the stringified block
  const blockHash = SHA256(blockStr).toString();

  // Add the calculated hash to the block
  block.hash = blockHash;

  // Increment the block height for the next block
  // blockHeight++;

  // Add the new block to the blocks array
  blocks.push(block);
}

module.exports = {
  TARGET_DIFFICULTY,
  MAX_TRANSACTIONS,
  addTransaction,
  mine,
  blocks,
  mempool,
};
```

4. Block Size - Mine Transactions

In Bitcoin, there is a specific block size limit that cannot be exceeded. The number of transactions that will fit inside of a block varies due to transactions being of all different sizes.

For the purposes of this exercise, we will use the `MAX_TRANSACTIONS`constant.

📖 Deciding the block size in bitcoin has been quite [controversial](https://en.bitcoin.it/wiki/Block_size_limit_controversy)!

#### 🏁 Your Goal: Mine Transactions

- Inside the `mine` function, pull `transactions` off the `mempool` and include them in the `block` in an array called `transactions`
- Remove each `transaction` you include in the `block` from the `mempool`
- Add the `transactions` array to the `block` before `hashing` the `block`

`⚠️ Do not include more transactions in the block than the MAX_TRANSACTIONS limit.`

```js
// test.js
const { assert } = require("chai");
const { mine, blocks, mempool, addTransaction } = require("../index");
const SHA256 = require("crypto-js/sha256");

describe("mine", () => {
  describe("with 5 mempool transactions", () => {
    before(() => {
      for (let i = 0; i < 5; i++) {
        addTransaction({ sender: "bob", to: "alice" });
      }
    });
    describe("after mining", () => {
      before(() => {
        mine();
      });
      it("should add to the blocks", () => {
        assert.equal(blocks.length, 1);
      });
      it("should store the transactions on the block", () => {
        assert.equal(blocks[blocks.length - 1].transactions.length, 5);
      });
      it("should clear the mempool", () => {
        assert.equal(mempool.length, 0);
      });
    });
  });
  describe("with 15 mempool transactions", () => {
    before(() => {
      for (let i = 0; i < 15; i++) {
        addTransaction({ sender: "bob", to: "alice" });
      }
    });
    describe("after mining", () => {
      before(() => {
        mine();
      });
      it("should add to the blocks", () => {
        assert.equal(blocks.length, 2);
      });
      it("should store the transactions on the block", () => {
        assert.equal(blocks[blocks.length - 1].transactions.length, 10);
      });
      it("should reduce the mempool to 5", () => {
        assert.equal(mempool.length, 5);
      });
      describe("after mining again", () => {
        before(() => {
          mine();
        });
        it("should add to the blocks", () => {
          assert.equal(blocks.length, 3);
        });
        it("should store the transactions on the block", () => {
          assert.equal(blocks[blocks.length - 1].transactions.length, 5);
        });
        it("should clear the mempool", () => {
          assert.equal(mempool.length, 0);
        });
      });
    });
  });
});
```

```js
// index.js
const SHA256 = require("crypto-js/sha256");
const TARGET_DIFFICULTY =
  BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTransaction(transaction) {
  // TODO: add transaction to mempool
  // Check if the mempool is not full (MAX_TRANSACTIONS) before adding the transaction
  // if (mempool.length < MAX_TRANSACTIONS) {
  //     mempool.push(transaction);
  // } else {
  //     console.log("Mempool is full. Cannot add more transactions.");
  // }

  //////////////////////////////////////

  mempool.push(transaction);
}

function mine() {
  // TODO: mine a block
  // Create a new block with a unique identifier (block height prior to adding it)
  // const block = { id: blocks.length };

  // Create an array to store the transactions included in the block
  // const transactions = [];

  // Determine the number of transactions to include in the block
  // const numTransactionsToInclude = Math.min(MAX_TRANSACTIONS, mempool.length);

  // Loop through the transactions in the mempool and add them to the block
  // while (transactions.length < MAX_TRANSACTIONS && mempool.length > 0) {
  //     transactions.push(mempool.pop());
  // }

  // Add the transactions array to the block
  // block.transactions = transactions;

  // stringify the block object
  // const blockStr = JSON.stringify(block);

  // Calculate the SHA256 hash of the stringified block
  // const blockHash = SHA256(blockStr).toString();

  // Add the calculated hash to the block
  // block.hash = blockHash;

  // Increment the block height for the next block
  // blockHeight++;

  // Add the new block to the blocks array
  // blocks.push(block);

  /////////////////////////////////////

  let transactions = [];
  while (transactions.length < MAX_TRANSACTIONS && mempool.length > 0) {
    transactions.push(mempool.pop());
  }
  const block = { id: blocks.length, transactions };
  const hash = SHA256(JSON.stringify(block));
  blocks.push({ ...block, hash });
}

module.exports = {
  TARGET_DIFFICULTY,
  MAX_TRANSACTIONS,
  addTransaction,
  mine,
  blocks,
  mempool,
};
```

5. Target Difficulty

In bitcoin, the difficulty is adjusted every 2016 blocks, which is about every two weeks with the blocks being mined on average every 10 minutes.

At that point, the difficulty is adjusted to attempt to keep the mining intervals around that 10 minute per block mark.

#### 🏁 Your Goal: Proof of Work

Now it's time to actually mine the block. This is where we get the work part of proof of work!

- In the `mine` function, prior to hashing the block, add a `nonce` property. This property should start at `0`
- Keep changing the `nonce` until you find a hash that is `less than the TARGET_DIFFICULTY`

You can compare a `BigInt` to `another BigInt` using the JavaScript comparison operators. You can convert from a hash to be a `BigInt` by:

```js
const hash = SHA256("example");
const int = BigInt(`0x${hash}`);
```

```js
// test.js
const { assert } = require("chai");
const {
  mine,
  blocks,
  mempool,
  addTransaction,
  TARGET_DIFFICULTY,
} = require("../index");
const SHA256 = require("crypto-js/sha256");

describe("mine", () => {
  describe("with 5 mempool transactions", () => {
    before(() => {
      for (let i = 0; i < 5; i++) {
        addTransaction({ sender: "bob", to: "alice" });
      }
    });
    describe("after mining", () => {
      before(() => {
        mine();
      });
      it("should add to the blocks", () => {
        assert.equal(blocks.length, 1);
      });
      it("should store the transactions on the block", () => {
        assert.equal(blocks[blocks.length - 1].transactions.length, 5);
      });
      it("should clear the mempool", () => {
        assert.equal(mempool.length, 0);
      });
      it("should have a nonce", () => {
        assert.isDefined(
          blocks[blocks.length - 1].nonce,
          "did not find a nonce on the block"
        );
      });
      it("should have a hash lower than the target difficulty", () => {
        const actual = blocks[blocks.length - 1].hash.toString();
        const isLess = BigInt(`0x${actual}`) < TARGET_DIFFICULTY;
        assert(
          isLess,
          "expected the hash to be less than the target difficulty"
        );
      });
    });
  });
  describe("with 15 mempool transactions", () => {
    before(() => {
      for (let i = 0; i < 15; i++) {
        addTransaction({ sender: "bob", to: "alice" });
      }
    });
    describe("after mining", () => {
      before(() => {
        mine();
      });
      it("should add to the blocks", () => {
        assert.equal(blocks.length, 2);
      });
      it("should store the transactions on the block", () => {
        assert.equal(blocks[blocks.length - 1].transactions.length, 10);
      });
      it("should reduce the mempool to 5", () => {
        assert.equal(mempool.length, 5);
      });
      it("should have a nonce", () => {
        assert.isDefined(
          blocks[blocks.length - 1].nonce,
          "did not find a nonce on the block"
        );
      });
      it("should have a hash lower than the target difficulty", () => {
        const actual = blocks[blocks.length - 1].hash.toString();
        const isLess = BigInt(`0x${actual}`) < TARGET_DIFFICULTY;
        assert(
          isLess,
          "expected the hash to be less than the target difficulty"
        );
      });
      describe("after mining again", () => {
        before(() => {
          mine();
        });
        it("should add to the blocks", () => {
          assert.equal(blocks.length, 3);
        });
        it("should store the transactions on the block", () => {
          assert.equal(blocks[blocks.length - 1].transactions.length, 5);
        });
        it("should clear the mempool", () => {
          assert.equal(mempool.length, 0);
        });
        it("should have a nonce", () => {
          assert.isDefined(
            blocks[blocks.length - 1].nonce,
            "did not find a nonce on the block"
          );
        });
        it("should have a hash lower than the target difficulty", () => {
          const actual = blocks[blocks.length - 1].hash.toString();
          const isLess = BigInt(`0x${actual}`) < TARGET_DIFFICULTY;
          assert(
            isLess,
            "expected the hash to be less than the target difficulty"
          );
        });
      });
    });
  });
});
```

```js
// index.js
const SHA256 = require("crypto-js/sha256");
const TARGET_DIFFICULTY =
  BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTransaction(transaction) {
  // TODO: add transaction to mempool
  // Check if the mempool is not full (MAX_TRANSACTIONS) before adding the transaction
  // if (mempool.length < MAX_TRANSACTIONS) {
  //     mempool.push(transaction);
  // } else {
  //     console.log("Mempool is full. Cannot add more transactions.");
  // }

  //////////////////////////////////////

  mempool.push(transaction);
}

function mine() {
  // TODO: mine a block
  // Create a new block with a unique identifier (block height prior to adding it)
  // const block = { id: blocks.length };

  // Create an array to store the transactions included in the block
  // const transactions = [];

  // Determine the number of transactions to include in the block
  // const numTransactionsToInclude = Math.min(MAX_TRANSACTIONS, mempool.length);

  // Loop through the transactions in the mempool and add them to the block
  // while (transactions.length < MAX_TRANSACTIONS && mempool.length > 0) {
  //     transactions.push(mempool.pop());
  // }

  // Add the transactions array to the block
  // block.transactions = transactions;

  // stringify the block object
  // const blockStr = JSON.stringify(block);

  // Calculate the SHA256 hash of the stringified block
  // const blockHash = SHA256(blockStr).toString();

  // Add the calculated hash to the block
  // block.hash = blockHash;

  // Increment the block height for the next block
  // blockHeight++;

  // Add the new block to the blocks array
  // blocks.push(block);

  /////////////////////////////////////

  let transactions = [];
  while (transactions.length < MAX_TRANSACTIONS && mempool.length > 0) {
    transactions.push(mempool.pop());
  }
  const block = { id: blocks.length, transactions, nonce: 0 };
  // Proof of work: Keep changing the nonce until the hash is less than TARGET_DIFFICULTY
  while (true) {
    const hash = SHA256(JSON.stringify(block) + block.nonce);
    const hashBigInt = BigInt(`0x${hash}`);
    if (hashBigInt < TARGET_DIFFICULTY) {
      block.hash = hash;
      break;
    }
    block.nonce++;
  }

  // Add the mined block to the blocks array
  blocks.push(block);
}

module.exports = {
  TARGET_DIFFICULTY,
  MAX_TRANSACTIONS,
  addTransaction,
  mine,
  blocks,
  mempool,
};
```
