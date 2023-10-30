## Blockchain Time

We have a new file: Blockchain.js. How exciting! 😁

This stage is going to focus on adding the first block to our new Blockchain class! The first block is often referred to as the Genesis Block.

🏁 Your Goal: Add the Genesis Block
The Blockchain.js file contains the Blockchain class with a chain array. Let's add the Genesis Block to this array.

Create a new Block in the Blockchain constructor then add it to the chain array.

```js
// Block.js
const SHA256 = require("crypto-js/sha256");

class Block {
  constructor(data) {
    this.data = data;
  }
  toHash() {
    // return SHA256("Bishal").toString(); // a hash!
    return SHA256(this.data).toString(); // a hash!
  }
}

module.exports = Block;
```

```js
// test.js
const Blockchain = require("../Blockchain");
const Block = require("../Block");
const assert = require("assert");

describe("Blockchain", function () {
  it("should have a genesis block", function () {
    const blockchain = new Blockchain();
    const genesisBlock = blockchain.chain[0];
    assert(genesisBlock, "Could not find the genesis block!");
    assert(genesisBlock instanceof Block, "genesis block should be a block!");
  });
});
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
}

module.exports = Blockchain;
```

### Genesis Block

The genesis block is the first block in the chain, where it all kicks off! Every block after the genesis block links back to the first one, but the genesis block has no previous block! This is important to keep in mind for the next few stages. 🧠
