const crypto = require("text-cryptography");

// KEYWORD:- only Alphabets
// maintainCase:- Default = true
let vig = new crypto.Vigenere("keyword");


let en = vig.encrypt("Hold the Door");
let de = vig.decrypt(en)

console.log(en) 
console.log(de)
// Encrypt = Rsjz hyh Nsmn
// Decrypt = Hold the Door



// vigenere with new keyword and maintainCase = false
vig.keyword = "helloworld"
vig.maintainCase = false

en = vig.encrypt("Hold the Door...43129!!!?");
de = vig.decrypt(en);

console.log(en)
console.log(de)
// Encrypt = OSWO HDS UZRY...43129!!!?
// Decrypt = HOLD THE DOOR...43129!!!?