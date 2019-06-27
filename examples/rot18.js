const crypto = require("text-cryptography");

let rot18 = new crypto.Rot18();

// only for Alphabets and Digits
let en = rot18.encrypt("Hold the Door");
let de = rot18.decrypt(en)

console.log(en) 
console.log(de)
// Encrypt = Ubyq gur Qbbe
// Decrypt = Hold the Door



en = rot18.encrypt("Hold the Door...43129!!!?");
de = rot18.decrypt(en);

console.log(en)
console.log(de)
// Encrypt = Ubyq gur Qbbe...98674!!!?
// Decrypt = Hold the Door...43129!!!?