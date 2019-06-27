# Vigenere
Vigenere cipher is a poly-alphabetic substitution cipher that use a key and a 26*26 grid table.
> __constructor__(keyword: _string_, maintainCase: _boolean_)
#### Parameters:
- __keyword__ (required): keyword, length greater than 0
- __maintainCase__ (optional:- Default=true): if true, then maintain case text, else string is converted to Upper Case.
***

> __encrypt__(plainText: _string_)

Encrypt text using vigenere cipher according to keyword and grid(table).
#### Parameters:
 - __plainText__:- The text to encrypt.

> __decrypt__(cipherText: _string_)

Decrypt text using vigenere cipher according to keyword and grid(table).
#### Parameters:
 - __cipherText__:- Decrypt text.


### [Examples](https://github.com/Badvillain01/Text-Cryptography/blob/master/examples/vigenere.js)