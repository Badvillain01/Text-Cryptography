# Text Cryptography
Encrypt and Decrypt text using classical ciphers. 
## Install
npm 
```
npm i text-cryptography
```
yarn
```
yarn add text-cryptography
```

## Table of Contents
  - [Quick Start](#quick-start)
  - [List of Current Ciphers](#ciphers-list)

## Quick Start
> Quick example using Affine cipher
- Affine takes two keys(a and b)
-- a:- Between 1-9
--b:- Between 0-25
--maintainCase(optional boolean): Default true
```
const crypto = require("text-cryptography");

let affine =  new crypto.Affine(5,  8);

let en = affine.encrypt("Hello their 90!");
let de = affine.decrypt(en)

console.log(en)
console.log(de)
```
> <b>Encryption text</b>:- Rclla zrcwp 90!
> <b>Decryption text</b>:- Hello their 90!


## Current Ciphers <a name="ciphers-list"></a>
Total Ciphers: 14

- Affine
- Atbase
- Baconian
- Caesar
- Latin Alphabet
- Mixed Alphabet
- Polybius Square
- Rail Fence
- Reverse
- Rot 5
- Rot 13
- Rot 18
- Rot 47
- Vigenere

### docs coming soon