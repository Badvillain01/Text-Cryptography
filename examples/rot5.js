const crypto = require("text-cryptography");

let rot5 = new crypto.Rot5();

// only for digits
let en = rot5.encrypt("0123456789");
let de = rot5.decrypt(en)

console.log(en) 
console.log(de)
// Encrypt = 5678901234
// Decrypt = 0123456789




en = rot5.encrypt("Hold the Door...124");
de = rot5.decrypt(en);

console.log(en)
console.log(de)
// Encrypt = Hold the Door...679
// Decrypt = Hold the Door...124