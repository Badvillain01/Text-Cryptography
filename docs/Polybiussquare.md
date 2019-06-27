# Polybius Square
This cipher consist of 5*5 grid, which is used to generate cipher text. In polybius, each letter is replaced by its coordinates of its position in a grid.

__Because its 5*5 grid, letter J is not included__
> __constructor__(keyword: _string_)
#### Parameters:
- __keyword__(required): A keyword that is used to generate 5*5 grid.
***
> __encrypt__(plainText: _string_)

Encrypt text using polybius square cipher according to keyword and grid.
#### Parameters:
 - __plainText__:- The text to encrypt.

> __decrypt__(cipherText: _string_)

Decrypt text using polybius square cipher according to keyword and grid.
#### Parameters:
 - __cipherText__:- Decrypt text.


### [Examples](https://github.com/Badvillain01/Text-Cryptography/blob/master/examples/polybiusSquare.js)