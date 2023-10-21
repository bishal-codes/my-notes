# Public Key Cryptography with ECDSA (Elliptic Curve Digital Signature Algorithm)

[Hash Message](###1-hash-message) ----> [Sign Message](###2-sign-message) ----> [Recover Key](###3-recover-key) ----> [Key to Address](###4-key-to-address)

- Use secp256k1 algorithm (curve used for both Bitcoin and Ethereum)

## Learnings

- how to sign a hashed message,
- how to recover the public key from the signature and
- how to transform the public key into the user's ethereum address.

These concepts will help us understand how the blockchain protocol works and provide us with the tools to use digital signature authentication when we need to prove a user's intention. This will be crucial knowledge when building applications interacting with blockchain as well as smart contracts on the blockchain.

### 1. Hash Message

The first step in ECDSA is to hash the message before applying the signature algorithm. So if you wanted to sign a message with one your keypairs saying that you "Vote Yes on Proposal 327", the first step would be to hash this message:

```js
// turn this into an array of bytes, the expected format for the hash algorithm
const bytes = utf8ToBytes("Vote Yes on Proposal 327");
// hash the message using keccak256
const hash = keccak256(bytes);

console.log(toHex(hash)); // 928c3f25193b338b89d5646bebbfa2436c5daa1d189f9c565079dcae379a43be
```

`☝️ After we have the message hash we can sign it with our private key to prove that a particular address votes yes on proposal 327. You may have found yourself doing something similar if you have ever signed a message in web3. When you send a transaction to a blockchain you also sign a hashed representation of that transaction before sending it to a blockchain node.`

### 🏁 Your Goal: Hash the Message

The [noble-secp256k1 library](https://github.com/paulmillr/noble-secp256k1/tree/1.7.1) (v 1.7.1) provides us with all of the cryptography we're going to need throughout this course. Let's make use of the keccak256 hash and utf8ToBytes function.

Please note, this tutorial will require functions documented in release version 1.7.1 of the noble-secp256k1 library. Any further links in this tutorial will link directly to version 1.7.1 of the noble-secp256k1 documentation.

- Your first step is to take the string message passed in and turn it into an array of UTF-8 bytes. You can do so with the utf8ToBytes function.
- Then take the keccak256 hash of those bytes and return this value.

```js
// test.js
const hashMessage = require("../hashMessage");
const { assert } = require("chai");
const { toHex } = require("ethereum-cryptography/utils");

const helloWorldHex =
  "47173285a8d7341e5e972fc677286384f802f8ef42a5ec5f03bbfa254cb01fad";

describe("Hash Message", () => {
  it("should return the keccak256 hash of hello world", () => {
    const messageHash = hashMessage("hello world");

    assert.equal(toHex(messageHash), helloWorldHex);
  });
});
```

```js
// hashMessage.js
const { keccak256 } = require("ethereum-cryptography/keccak");
const { utf8ToBytes } = require("ethereum-cryptography/utils");

function hashMessage(message) {
  const bytes = utf8ToBytes(message);
  const hash = keccak256(bytes);

  console.log(hash);
  return hash;
}

module.exports = hashMessage;
```

### 2. Sign Message

It's time to sign a message using our private key to prove our intention!

When signing a message with secp256k1 we can return the signature along with the [recovery bit](https://cryptobook.nakov.com/digital-signatures/ecdsa-sign-verify-messages#ecdsa-public-key-recovery-from-signature), allowing us to recover the public key from the signature. This will allow a blockchain node to take a signature of a transaction and understand which address authenticated this particular transaction.

`💭 This is an important point, a blockchain transaction not only indicates the intent of the person who signed it, it also authenticates them through public key cryptography! We'll see this more clearly when start signing transactions in future lessons.`

### 🏁 Your Goal: Sign Message

Let's sign a message!

- First step is to hash it using the hashMessage function you created in the last stage (we've already imported it for you on line 2)
- Once you have the message hash, use the sign method from the [noble-secp256k1](https://github.com/paulmillr/noble-secp256k1/tree/1.7.1#signmsghash-privatekey) library.

**Note**

- The sign method will take your message hash along with the constant PRIVATE_KEY declared at the top of the file. This private key is a valid key that could be used to authorize blockchain transactions. Never use this specific key because it is published on the internet, so many people including yourself could authenticate with this specific private key. In future lessons we'll be discussing good private key hygiene to avoid losing funds.
- The sign method takes an optional third parameter called options, which you'll see in the documentation. Use this parameter to return the recovered bit so that the public key can be recovered from this signature.

## Using options to return a recoveryBit

The syntax for the third optional parameter of the secp sign function is a little tricky to get right... here's how to properly use the third parameter in order to return a recoveryBit from the signature process - which will later be used to recover a public key using just the messageHash, signature, and recoveryBit:

```js
return secp.sign(messageHash, PRIVATE_KEY, { recovered: true });
```

Just include the third paramater in an object that has the `recovered` key set to `true`. ✅

```js
// signMessage.js
const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require("./hashMessage");

const PRIVATE_KEY =
  "6b911fd37cdf5c81d4c0adb1ab7fa822ed253ab0ad9aa18d77257c88b29b718e";

async function signMessage(msg) {
  // Hash the input message
  const messageHash = hashMessage(msg);

  // Sign the message hash with the private key and get the recovery bit
  return secp.sign(messageHash, PRIVATE_KEY, { recovered: true });
}

module.exports = signMessage;
```

```js
// test.js
const signMessage = require("../signMessage");
const hashMessage = require("../hashMessage");
const { assert } = require("chai");
const secp = require("ethereum-cryptography/secp256k1");
const { toHex } = require("ethereum-cryptography/utils");

const PRIVATE_KEY =
  "6b911fd37cdf5c81d4c0adb1ab7fa822ed253ab0ad9aa18d77257c88b29b718e";

describe("Sign Message", () => {
  it("should return both a signature and a recovery bit", async () => {
    const response = await signMessage("hello world");

    const errMessage =
      "expected signMessage to return both a signature and recovery bit!";
    assert(response.length, errMessage);
    assert(response.length === 2, errMessage);

    const [signature, recoveryBit] = response;
    assert(signature.length, "expected signature to be a Uint8Array");
    assert(
      typeof recoveryBit === "number",
      "expected the recovery bit to be a number"
    );
  });

  it("should have been signed by the same private key", async () => {
    const [sig, recoveryBit] = await signMessage("hello world");
    const messageHash = hashMessage("hello world");
    const recovered = secp.recoverPublicKey(messageHash, sig, recoveryBit);

    const publicKey = secp.getPublicKey(PRIVATE_KEY);
    assert.equal(toHex(recovered), toHex(publicKey));
  });
});
```

### 3. Recover Public Key

`When the signature is passed with all of its components (recovery bit included), the public key can be recovered.` This means that blockchain nodes will be able to understand who signed the transaction that was sent to them. A transaction could indicate the user would like to send 1 ether to another address and provide a certain transaction fee. Since the signature signs the hash containing this intention, it is enough to authenticate this action entirely.

#### 🏁 Your Goal: Recover the Key

- Given a message, signature, and recoveryBit find the public key and return it! Be sure to hash the message when passing it to the recovery method.
- Use the [noble-secp256k1](https://github.com/paulmillr/noble-secp256k1/tree/1.7.1#signmsghash-privatekey) library documentation to find the correct method and parameters for this one.

`Remember to check version 1.7.1 of the library's documentation!`

```js
// recoverKey.js
const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require("./hashMessage");

async function recoverKey(message, signature, recoveryBit) {
  const msgHash = await hashMessage(message);
  const key = secp.recoverPublicKey(msgHash, signature, recoveryBit);
  console.log(key);
  return key;
}

module.exports = recoverKey;
```

```js
// test.js
const signMessage = require("../signMessage");
const recover = require("../recoverKey");
const secp = require("ethereum-cryptography/secp256k1");
const { assert } = require("chai");
const { toHex } = require("ethereum-cryptography/utils");

const PRIVATE_KEY =
  "6b911fd37cdf5c81d4c0adb1ab7fa822ed253ab0ad9aa18d77257c88b29b718e";

describe("Recover Key", () => {
  it("should recover the public key from a signed message", async () => {
    const [sig, recoveryBit] = await signMessage("hello world");

    const publicKey = secp.getPublicKey(PRIVATE_KEY);

    const recovered = await recover("hello world", sig, recoveryBit);

    assert.equal(toHex(recovered), toHex(publicKey));
  });
});
```

### 4. Key to Address

Bitcoin and Ethereum both have a transformation process to `take a public key and turn it into an address`. For Bitcoin it includes a [checksum and Base58 encoding](https://en.bitcoin.it/wiki/Technical_background_of_version_1_Bitcoin_addresses). Ethereum's address transformation is quite a bit simpler, its address is the last 20 bytes of the hash of the public key.

The important thing to recognize here is that the `address is differentiated from the public key`, but you can always derive the address if you have the public key.

####. 🏁 Your Goal: Get Ethereum Address

Let's get the ethereum address from the public key!

- First step, you'll need to take the first byte off the public key. `The first byte indicates the format of the key`, whether it is in the compressed format or not. The `publicKey` will be a `Uint8Array` so you can use the [slice method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/slice) to slice off the first byte.
- Next, take the `keccak` hash of the rest of the public key.
- Finally, take the last 20 bytes of the `keccak` hash and return this. Once again, you can make use of the slice method.

```js
// getAddress.js
const secp = require("ethereum-cryptography/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");

function getAddress(publicKey) {
  console.log("public key: ", publicKey);

  // Remove the first byte (0x04) from the public key
  const publicKeyWithoutPrefix = publicKey.slice(1);

  console.log("publicKeyWithoutPrefix: ", publicKeyWithoutPrefix);

  // Compute the keccak hash of the public key
  const publicKeyHash = keccak256(publicKeyWithoutPrefix);

  console.log("publicKeyHash: ", publicKeyHash);

  // Take the last 20 bytes of the keccak hash to get the address
  const address = publicKeyHash.slice(-20);

  console.log("address: ", address);

  return address;
}

module.exports = getAddress;
```

```js
// test.js
const getAddress = require("../getAddress");
const secp = require("ethereum-cryptography/secp256k1");
const { assert } = require("chai");
const { toHex } = require("ethereum-cryptography/utils");

const PRIVATE_KEY =
  "6b911fd37cdf5c81d4c0adb1ab7fa822ed253ab0ad9aa18d77257c88b29b718e";
const EXPECTED_ADDRESS = "16bB6031CBF3a12B899aB99D96B64b7bbD719705";

describe("Get Address", () => {
  it("should get the address from a public key", async () => {
    const publicKey = secp.getPublicKey(PRIVATE_KEY);

    const address = toHex(getAddress(publicKey));

    assert.equal(address.toLowerCase(), EXPECTED_ADDRESS.toLowerCase());
  });
});
```
