# What purpose the blockchain serves and the cryptographic hash function

## Blockchain And Crypto

Q. Difference between centralized, decentralized and distributed systems?

| Characteristic          | Centralized                                                                                                                                                                                         | Decentralized                                                                                                                                                                                                                                                      | Distributed                                                                                                                                                                                                 |
| :---------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ownership and Control   | owned and controlled by a single entity, typically a company or individual. They make decisions and have full authority over the application.                                                       | have no single entity in control. Decisions are made collectively through consensus mechanisms, and no one entity has ultimate authority.                                                                                                                          | consist of multiple components that cooperate to achieve a common goal. They can be owned by different entities but work together.                                                                          |
| Examples                | Facebook - A centralized social media platform where Facebook, Inc. owns and controls the platform.                                                                                                 | Uniswap - A decentralized exchange operating on the Ethereum blockchain. It's managed by code and token holders, with no central authority.                                                                                                                        | Content Delivery Networks (CDNs) like Akamai - CDNs distribute web content across multiple servers owned by different entities, working together to deliver content efficiently.                            |
| Data Location           | Data is typically stored in a centrally owned database, often on a central server controlled by the application's owner.                                                                            | Data in decentralized applications can be stored in various data structures, often utilizing blockchain technology. For example, Bitcoin uses a decentralized ledger (blockchain) to store transaction data.                                                       | Data in distributed applications is distributed across multiple components. AWS, for instance, offers various storage options distributed across its data centers.                                          |
| Single Point of Failure | Centralized applications are vulnerable to single points of failure. If the central server or entity experiences issues, the entire service may become unavailable.                                 | Decentralized applications are more resilient to node failures. Even if some nodes (computers) go offline or face issues, the application can continue to function.                                                                                                | Distributed applications are designed to be scalable and robust. They efficiently distribute tasks across multiple components, reducing the risk of a single point of failure.                              |
| Trust Model             | Users of centralized applications must place their trust in the central entity to act in their best interest and manage data securely. Trust is centralized in the company running the application. | Trust in decentralized applications is minimized. Users trust the code and consensus mechanisms rather than a central authority. For example, users of a DeFi application trust that the code and smart contracts will execute financial transactions as intended. | In distributed applications, trust is distributed among the components. Users trust that the various components and servers within the infrastructure will work together to provide the services they need. |
| Examples                | Facebook, Twitter, centralized banking apps, centralized e-commerce websites (e.g., Amazon).                                                                                                        | Ethereum-based DeFi applications (e.g., Compound, Aave), Bitcoin (decentralized ledger).                                                                                                                                                                           | Content Delivery Networks (e.g., Akamai), cloud computing services (e.g., AWS), large-scale internet platforms (e.g., Google, Netflix).                                                                     |

### Blockchain

1. Purpose of Blockchain

- to have a network of computers agree upon common state of data. Generally the term `consensus` is used to describe a network coming to an agreement on the state of the data.
- Any person or organization should be able to participate in this process. 
- No person or organization should be able to control this process.
- with a blockchain, we can decentralize where code can be run and also agree on the output of the code.
  - there is no single owner of the code execution
    - the code runs as it is programmed
    - the code is transparently verifiable
    - **developers can choose to write the privileged code**

```js
// this data structure will keep track of which address has a balance
mapping(address => uint256) balances;

function transfer(address _to, uint256 amount) external {
    // subtract amount from sender's balance
    balances[msg.sender] -= amount;

    // add amount to receiver's balance
    balances[_to] += amount;
}
```

`Smart Contract blockchains` provide developers with a way to decentralize where the code runs. In this way, code can truly become a public resource. This means code can run without any direct ownership, making it censorship resistant and transparently verifiable. A `smart contract` is code that will always run the way it is programmed.

**Q. Is the above code decentralized?**

- use this code, compile it and deploy it in the own standalone server that I control. So, it is not decentralized.
  - can change this code
  - can redeploy this code
  - **there is no guarantee that the code will run exactly the same tomorrow as it is right now.**

`Blockchain guarantees that code will run exactly the same forever once it is deployed to decentralized server or blockchain like Ethereum.`

2. Blockchain Network

- Blockchain: protocol connecting nodes in a peer-to-peer network.
- Network: the set of all nodes in the network.
  - each machine or node in the network runs as it is programmed
  - blockchain enforces all the above rules
  - and hence, as program is enforced, it is called `smart contract`

`network (nodes) <------- blockchain -------> network (nodes) <------- blockchain ---------> network (nodes)`

- Bitcoin the first blockchain
- Ethereum the second blockchain

### How does Blockchain work?

Decentralization emerges from the properly setup network.

- proof of work: Security
- Mining Rewards: Financial Incentives
- Public Key Cryptography: Authentication
- Linked Data Structure: Chronology
- Peer-to-Peer: Decentralized, permissionless

### Why is blockchain needed for cryptocurrency?

Imagine a digital currency without blockchain – it's like a digital ledger where you and your friends track who owes how much money. Here's how it would work:

You start with a spreadsheet, listing everyone's balances.
Alice wants to pay Bob 5 units of the currency, so she tells you to update their balances.
You manually update the spreadsheet, reducing Alice's balance and increasing Bob's balance.
Seems simple, right? But there are issues:

- Trust: Your friends must trust you not to cheat or make mistakes.
- Accessibility: Everyone needs access to the spreadsheet and see up-to-date balances.
- Scalability: As more friends join, the manual bookkeeping becomes overwhelming.

We can solve #2 and #3 with technology like a website and APIs. But trust (#1) is a tough problem. How can you ensure trust among participants?

In 2008, a breakthrough happened. An anonymous figure or group named Satoshi Nakamoto introduced Bitcoin. They proposed a system that combined cryptography, game theory, and a chain of blocks, called a blockchain. This technology solved the trust issue.

Blockchain was invented to create a trustless system, where no one can cheat or manipulate the ledger. It's neutral, secure, and resistant to censorship or bribes. This is why blockchain is crucial for cryptocurrency.

1. Trustless Transactions: Blockchain ensures that cryptocurrency transactions are secure and trustless, meaning they can occur without relying on intermediaries like banks.

2. Decentralization: It allows for a decentralized ledger, removing the need for a central authority, making it resistant to manipulation or censorship.

3. Transparency: Every transaction is recorded on a public ledger that anyone can access, promoting transparency and accountability.

4. Immutability: Once a transaction is added to the blockchain, it's nearly impossible to alter, ensuring the integrity of the transaction history.

5. Security: Cryptographic techniques protect transactions, wallets, and the network from fraud and hacking attempts.

6. Resilience: The distributed nature of the blockchain makes it resilient to system failures and attacks, ensuring uninterrupted transactions.

7. Censorship Resistance: Cryptocurrency transactions cannot be easily blocked or censored by any central authority, guaranteeing financial freedom.

8. Global Accessibility: Cryptocurrencies built on blockchain technology are accessible to anyone with an internet connection, promoting financial inclusion.

9. Incentive Mechanisms: Blockchain uses economic incentives, like mining rewards, to encourage network participants to act honestly and maintain the network.

10. Innovation: Blockchain opens the door to innovative financial applications and services, transforming traditional financial systems.

### Crypto

- way before cryptocurrency, crypto was used for encryption.
    - Cryptographic hashes
    - Public Key Cryptography
    - Digital signatures

1. Hash Function
  - hash function is a function that maps data to a fixed-length value
  - give me a value (input) that can be big or small, hash function will output the fixed length value
    - Input can be of any data type: `String`, `Number`, `Boolean`, `Array`, `Object`, `image`, `video`
        - example:

```js
const crypto = require("crypto");
const hash = crypto.createHash("sha256");
```

```js
const hash = crypto.createHash("sha256").update("Hello World").digest("hex");
```

2. Cryptographic Hash Functions

## Properties:

- Deterministic
- Secure
- Pseudorandom
- One-way
- Fast to Compute
- collision-resistant

`function sha256(){}` -----> returns 256 bit output

## Use Cases

- Commitments (Protocol & Smart Contract)
- Proof of work