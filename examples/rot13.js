const crypto = require("text-cryptography");

let rot13 = new crypto.Rot13();

// only for Alphabets
let en = rot13.encrypt("Hold the Door");
let de = rot13.decrypt(en)

console.log(en) 
console.log(de)
// Encrypt = Ubyq gur Qbbe
// Decrypt = Hold the Door




en = rot13.encrypt("Hold the Door...91!!!?");
de = rot13.decrypt(en);

console.log(en)
console.log(de)
// Encrypt = Ubyq gur Qbbe...91!!!?
// Decrypt = Hold the Door...91!!!?