# Validating the Chain

Blockchains are run by a network of computers. When a computer finds a new block, it broadcasts its new version of the blockchain to all of its peers. There may be multiple versions of the blockchain at any given time. However, the longest valid blockchain is the accepted one.

### 🏁 Your Goal: Create an isValid Function

Create a function called `isValid` on our Blockchain that will return true or false if a block is valid or invalid respectively
`isValid` should check the integrity of every block in its chain by looking at each block's previousHash field and making sure that it is equal to the hash of the block before it

```js
// Block.js
const SHA256 = require("crypto-js/sha256");

class Block {
  constructor(data, previousHash) {
    this.data = data;
    this.previousHash = previousHash;
  }
  toHash() {
    // return SHA256("Bishal").toString(); // a hash!
    return SHA256(this.data + this.previousHash).toString(); // a hash!
  }
}

module.exports = Block;
```

```js
// Blockchain.js
const Block = require("./Block");

class Blockchain {
  constructor() {
    this.chain = [
      this.createGenesisBlock() /* TODO: Create the genesis block here */,
    ];
  }
  createGenesisBlock() {
    return new Block("Genesis Data"); // Create the Genesis Block with some initial data
  }
  addBlock(newBlock) {
    // this.chain.push(newBlock); // Add the new block to the chain
    const previousBlock = this.chain[this.chain.length - 1];
    newBlock.previousHash = previousBlock.toHash(); // Set previousHash
    this.chain.push(newBlock);
  }
  isValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      // Check if the previousHash of the current block matches the hash of the previous block
      if (currentBlock.previousHash !== previousBlock.toHash().toString()) {
        return false; // Invalid block
      }
    }

    return true; // All blocks are valid
  }
}

module.exports = Blockchain;
```

```js
// validationTest.js
const Blockchain = require("../Blockchain");
const Block = require("../Block");
const assert = require("assert");
const SHA256 = require("crypto-js/sha256");

describe("Blockchain", function () {
  let blockchain;
  beforeEach(() => {
    blockchain = new Blockchain();
    blockchain.addBlock(new Block("Dan"));
    blockchain.addBlock(new Block("Peter"));
    blockchain.addBlock(new Block("James"));
  });

  it("should be considered valid", function () {
    assert(blockchain.isValid());
  });

  describe("tampering with a previousHash", function () {
    beforeEach(() => {
      blockchain.chain[1].previousHash = SHA256("gibberish");
    });

    it("should not be considered valid", function () {
      assert(!blockchain.isValid());
    });
  });

  describe("tampering with data", function () {
    beforeEach(() => {
      blockchain.chain[0].data = "Something Else";
    });

    it("should not be considered valid", function () {
      assert(!blockchain.isValid());
    });
  });
});
```

### 💡 Hint

To compare the output of the SHA256 function you will need to convert it into a string (.toString) before comparing. Example:

```js
const hash1 = SHA256("a");
const hash2 = SHA256("a");

console.log(hash1 === hash2); // false
console.log(hash1.toString() === hash2.toString()); // true
```

`👀 Notice that first one is false! These two are objects and are compared by reference which is why we need to convert it to a string!`

## Blockchain Consensus

Blockchains are said to share a common source of truth. This is because all machines operating in the network can come to a common consensus on what the truth is.

The consensus mechanism we describe in this lesson is referred to as `Proof of Work`. A major rule in `Proof of Work` is that the longest chain wins. This rule is in place to ensure that the version of the blockchain with the most computational resources behind it is the current version of the truth.

So the question we ought to be asking ourselves is: `Why is it so difficult to compute a new block? 🤔`

The answer is, it is designed to be difficult. The difficulty is a feature of a blockchain designed to require significant resources in order to derive a new block. This is the security behind the network which makes it outrageously expensive to attack. 🔒 .

The process by which the a new block is derived is called `mining` and the difficult of `mining` is adjusted by the network as new resources flow into and out of the system.

## Mining ⛏️

Mining is the process by which new blocks are discovered for a blockchain. A new block has to satisfy rules in order to fit into a blockchain.

These rules are the ones we've been working on! The new block must include a hash calculated by some metadata, some transactional data, and the previous hash of the block before it.

One final rule is added to manipulate the difficulty of the block: The block's hash must contain a certain number of zeroes.

`☝️ The only way to derive this hash with the data mentioned is to add a random value, referred to as a nonce, to the data during the hashing calculation. Essentially, the computer must continue to guess incessantly until it finds a block that satisfies these conditions.`

Once a block is found, the computer broadcasts this block to the network and is rewarded financially for doing so.
