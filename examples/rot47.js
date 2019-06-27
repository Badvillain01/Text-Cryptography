const crypto = require("text-cryptography");

let rot47 = new crypto.Rot47();


let en = rot47.encrypt("Hold the Door");
let de = rot47.decrypt(en)

console.log(en) 
console.log(de)
// Encrypt = w@=5 E96 s@@C
// Decrypt = Hold the Door



en = rot47.encrypt("Hold the Door...43129!!!?");
de = rot47.decrypt(en);

console.log(en)
console.log(de)
// Encrypt = w@=5 E96 s@@C]]]cb`ahPPPn
// Decrypt = Hold the Door...43129!!!?