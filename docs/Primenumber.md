# Prime Numbers
In prime numbers cipher, each letter in alphabet is replace with a prime number. i.e. A=2, B=3 and Z=101.
> __constructor__(separator: _string_, ignoreSpaces: _boolean_)
#### Parameters
- __separator__(required:- Default="-"): A puncatuation, which is used to separat number. Length: 1 and Allowable:- !@#$%^&*()+_-
- __ignoreSpaces__ (optional:- Default=false): if true, then remove all spaces from string.
*** 
> __encrypt__(plainText: _string_)

Encrypt text using prime number cipher.
#### Parameters:
 - __plainText__:- The text to encrypt.

> __decrypt__(cipherText: _string_)

Decrypt text using prime number cipher.
#### Parameters:
 - __cipherText__:- Decrypt text.


### [Examples](https://github.com/Badvillain01/Text-Cryptography/tree/master/examples)