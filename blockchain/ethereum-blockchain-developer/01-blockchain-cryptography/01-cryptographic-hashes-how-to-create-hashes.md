# Creating Cryptographic Hashes

- Password Recovery
- Data Verification
- Digital Certificates
- Cryptocurrency Transactions
- Forensic Analysis
- Secure Communications
- Security Audits
- Secure Backup and Restore

1. Find Favorite Color

## Task:

Cryptographic Hash Functions like SHA256 are `one-way functions`. This means that if you have the input, it's relatively trivial to find the output. On the other hand, if you have the output, it is infeasible to find the input.

However, if you knew the hashes of some common inputs, then you could brute-force guess at the output or create a [Rainbow Table](###rainbow-table-🌈) to determine what that input is.

It's easy to find that the SHA256 hash of "apples" is 0xf5903f...0f74d9. If this was a likely input, a hacker could search for it specifically and know that the input was "apples"! 😱

`⚠️ For security purposes, it's important to remember to use a random salt which you can add to your input to make it unguessable via the methods mentioned above!`

## 🏁 Your Goal: Find the Color

Given a SHA256 hash, find the color input that would generate that hash. You can assume that all the hashes be generated only from colors provided in the COLORS array.

To take the hash of a color, first use utf8ToBytes to translate the string to bytes. Then, use sha256 to hash it.
When you want to compare two hashes, first use toHex to turn each hash from a Uint8Array to a string of hexadecimal characters.
So comparing two hashes would look like this:

```js
const a = "apple";
const b = "banana";

const aBytes = utf8ToBytes(a);
const bBytes = utf8ToBytes(b);

const aHash = sha256(aBytes);
const bHash = sha256(bBytes);

console.log(toHex(aHash) === toHex(aHash)); // true
console.log(toHex(aHash) === toHex(bHash)); // false
```

**📖 Wondering what utf8 stands for? The UTF-8 standard translates all the possible keyboard characters you can think of into bytes. This is an agreed upon standard to ensure we all get the same bit values representing the letters and words we see on the screen. Learn more about utf8 here.**

```js
// index.js
const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

// the possible colors that the hash could represent
const COLORS = ["red", "green", "blue", "yellow", "pink", "orange"];

// given a hash, return the color that created the hash
function findColor(hash) {
  // loop through the color
  for (const color of COLORS) {
    // translate the color or string into bytes
    const colorBytes = utf8ToBytes(color);
    // hash the bytes
    const colorHash = sha256(colorBytes);

    // compare the hashes to see if they are the same
    if (toHex(colorHash) === toHex(hash)) {
      return color;
    }
  }
  // return null if no match
  return null;
}

module.exports = findColor;
```

```js
// test.js
const { assert } = require("chai");
const findColor = require("../index");
const { sha256 } = require("ethereum-cryptography/sha256");
const { utf8ToBytes } = require("ethereum-cryptography/utils");

const COLORS = ["red", "green", "blue", "yellow", "pink", "orange"];

describe("findColor", () => {
  COLORS.forEach((color) => {
    it(`should work for ${color}`, () => {
      assert.equal(findColor(sha256(utf8ToBytes(color))), color);
    });
  });
});
```

### Rainbow Table 🌈

A rainbow table is simply a table which maps common inputs to their hash output. For instance, we could map common passwords to their SHA256 hashes:

| COMMON PASSWORDS | SHA256 HASH       |
| ---------------- | ----------------- |
| password         | 0x5e8848...1542d8 |
| qwerty           | 0x65e84b...2337c5 |
| 12345678         | 0xef797c...98a64f |
| abc123           | 0x6ca13d...118090 |

Even though the password should be unguessable, given a hash output, these common passwords make it easy to create a rainbow table to find what the plaintext input would be.

`⚠️ If a company were to lose their database of passwords (which happens way too often) and they do not protect their password hashes with a salt, it may be relatively easy for a hacker to use a rainbow table to find which passwords you use. From there, they can try those passwords on other services.`
