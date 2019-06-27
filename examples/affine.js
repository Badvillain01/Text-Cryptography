const crypto = require("text-cryptography");


// key a = 1,3,5,7,9,11,15,17,19,21,23,25
// key b = 0-25
// maintainCase true or false :: Default = true
let affine = new crypto.Affine(23, 8);


let en = affine.encrypt("Hold the Door");
let de = affine.decrypt(en)

console.log(en) 
console.log(de)
// Encrypt = Nsbz dnw Zssj
// Decrypt = Hold the Door


// affine with maintainCase = false and numbers and puncatuation.
affine.maintainCase = false
affine.a = 5 // new key a

en = affine.encrypt("Hold the Door...HODOR!69");
de = affine.decrypt(en);

console.log(en) 
console.log(de)
// Encrypt = ralx zrc xaap...raxap!69
// Decrypt = hold the door...hodor!69


// If key a is not odd num and greater than 0...then decryption of original text gets corrupted
affine.a = 2
affine.maintainCase = true

en = affine.encrypt("Hold the Door");
de = affine.decrypt(en)

console.log(en) 
console.log(de)
// Encrypt = Wkeo uwq Okkq
// Decrypt = Aaaa aaa Aaaa