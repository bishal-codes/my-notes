# Supplementary Resources on Digital Signatures

1. ECDSA

- Cloudflare provides a [great article](https://blog.cloudflare.com/ecdsa-the-digital-signature-algorithm-of-a-better-internet/) on how ECDSA is used on the web. If you've ever thought about how HTTPS works, this is your chance to dig in further!

Of course, wikipedia has a write-up on ECDSA. Naturally, it's very heavy math, however there are some interesting tidbits in here to pick up even if your math isn't super strong!

This resource is similar to the wikipedia article above, except it does a much better job of explaining ECDSA mathematics in simpler language.

`https:// ---> browser connects to that site over an encrypted connection and also validates that the site is who it claims to be using public key cryptography and a digital certificate`

In Public Key Cryptography, each person has a pair of keys:

| Algorithm | Public Key                                                            | Private Key      |
| --------- | --------------------------------------------------------------------- | ---------------- |
| RSA       | a large number that is a product of two primes, plus a smaller number | a related number |
| ECDSA     | an equation for an elliptic curve and a point that lies on that curve | a number         |

Both are typically numbers that are chosen to have a specific mathematical relationship.

#### Use of private key:

- to create a digital signature for any piece of data using a digital signature algorithm.
  - involves taking a cryptographic hash of the data and operating on it mathematically using the private key.

#### Use of public key:

- Anyone with the public key can check that this signature was created using the private key and the appropriate signature validation algorithm.

`A digital signature is a powerful tool because it allows you to publicly vouch for any message.`

A website certificate usually contains two things:

- Identity information: Typically who owns the certificate and which domains the certificate is valid for.
- A public key: The public half of a key pair, the site owner controls and keeps secret the associated private key.

### Bitcoin

- uses [secp256k1](https://en.bitcoin.it/wiki/Secp256k1), the parameters of the elliptic curve used in Bitcoin's public-key cryptography, and is defined in Standards for Efficient Cryptography (SEC) 1, which is a standard for elliptic curve cryptography

In our Exchange project, we'll need a way to go from a public key to an address, so it is useful to understand how [Bitcoin derives addresses](https://en.bitcoin.it/wiki/Invoice_address). The diagram at the bottom of this article shows the derivation of the address starting all the way from the private key.

This is further technical detail of the [address derivation](https://en.bitcoin.it/wiki/Technical_background_of_version_1_Bitcoin_addresses#:~:text=A%20Bitcoin%20address%20is%20a,that%20the%20signature%20is%20valid.). It also explains the Checksum written into Bitcoin.

`💡 Bitcoin chose Base 58 for it's addresses because this format removes commonly mistaken characters like zero "0" and upper-case o "O".`

### Diffie-Hellman Key Exchange

We talked about Whit Diffie and Martin Hellman discovering the Public Key quite a bit. However, we didn't talk much about the [Diffie-Hellman exchange](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange), a mathematical method of securely exchanging cryptographic keys over a public channel, which is critical to the [TLS handshake for HTTPS](https://security.stackexchange.com/questions/41205/diffie-hellman-and-its-tls-ssl-usage/41226#41226).

`🧐 The Diffie-Hellman key exchange is utilized in a hybrid cryptosystem since it uses asymmetric cryptography for the handshake and then symmetric cryptography for the message passing.`

To understand more about this key exchange, check out this [colorful explanation](https://www.youtube.com/watch?v=NmM9HA2MQGI) as well as this more [mathematical one](https://www.youtube.com/watch?v=Yjrfm_oRO0w). And another good follow up is this video on [Elliptic Curves](https://www.youtube.com/watch?v=NF1pwjL9-DE).

### RSA

- a public-key cryptosystem, one of the oldest, that is widely used for secure data transmission.

Just like with ECDSA, wikipedia gives a [good overview](<https://en.wikipedia.org/wiki/RSA_(cryptosystem)>) and the cryptobook gives a [good explanation in plain English](https://cryptobook.nakov.com/digital-signatures/rsa-signatures).

There are two great videos on RSA mathematics given by Eddie Woo on YouTube (his WooTube channel 😃!). Here is part 1 and part 2.
