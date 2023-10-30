## Adding Data to the Hash

Now it's time to add data to our hash. This will ensure that the block's hash is tied to its contents!

🏁 Your Goal: Hash the Data
When creating a new block, data will be passed to its constructor:

```js
const block = new Block("Alice sent Bob 1 BTC");

console.log(block.data); // Alice sent Bob 1 BTC
```

☝️ As shown above, let's add a data property to the Block.

Add a constructor to our Block class that takes one argument data and assigns it to this.data
Once you have added data to the block, use this data to calculate the block's hash in the toHash function!

```js
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
const Block = require("../Block");
const assert = require("assert");
const SHA256 = require("crypto-js/sha256");

describe("Block", function () {
  it("should store a random name", function () {
    const randomName = require("faker").name.findName();
    assert.equal(randomName, new Block(randomName).data);
  });

  it("should hash some random data", function () {
    const randomEmail = require("faker").internet.email();
    const myHash = SHA256(randomEmail).toString();
    const yourHash = new Block(randomEmail).toHash().toString();
    assert.equal(myHash, yourHash);
  });
});
```

## Data Security

In this stage we use data to represent some arbitrary data that can be stored in a block. We hash the data to create a small, unique representation of that data. If the data ever changed inside of a block, we would see that reflected in the block's hash. It would be entirely different!

📖 For real blockchains, data is generally a set of transactions stored in a merkle tree. We'll get to that in a future lesson.

We can add other properties to the hash like a timestamp for the time the block was mined. This way, the block is tied to a specific point in time. It would be virtually impossible for someone to create a hash from the same data and a different timestamp.

In the upcoming stages, we'll learn to make this hash record even more powerful by linking each of these blocks together.
