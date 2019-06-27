# Affine
The Affine cipher uses a encrypting function with additions and multiplication, which convert a letter into another letter with value (ax + b) modulo 26.

> __constructor__(a: _number_, b: _number_, maintainCase: _boolean_)

#### Parameters:
- __a__ (required:- Default=3): Multiplication part of key. Allowable 1,3,5,7,9,11,15,17,19,21,23,25(odd number)
- __b__ (required:- Default=5): Adition part of key. Allowable values are integers 0-25
- __maintainCase__ (optional:- Default=true): if true, then maintain case text, else string is converted to Upper Case.

***

> __encrypt__(plainText: _string_)

Encrypt text using affine cipher according to keys.
#### Parameters:
 - __plainText__:- The text to encrypt.

> __decrypt__(cipherText: _string_)

Decrypt text using affine cipher accoding to keys.
#### Parameters:
 - __cipherText__:- Decrypt text.


### [Examples](https://github.com/Badvillain01/Text-Cryptography/blob/master/examples/affine.js)

#### [Learn more about Affine Cipher](https://en.wikipedia.org/wiki/Affine_cipher)