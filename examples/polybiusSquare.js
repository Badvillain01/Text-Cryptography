const crypto = require("text-cryptography");

// KEYWORD:- only Alphabets
let polySquare = new crypto.PolybiusSquare("keyword");


let en = polySquare.encrypt("Hold the Door");
let de = polySquare.decrypt(en)

console.log(en) 
console.log(de)
// Encrypt = 33515322 153321 22515112
// Decrypt = HOLD THE DOOR



// polySquare with new keyword
polySquare.keyword = "hello"

en = polySquare.encrypt("Hold the Door...43129!!!?");
de = polySquare.decrypt(en);

console.log(en)
console.log(de)
// Encrypt = 33515322 153321 22515112 .  .  .  4  3  1  2  9  !  !  !  ?
// Decrypt = HOLD THE DOOR . . . 4 3 1 2 9 ! ! ! ?