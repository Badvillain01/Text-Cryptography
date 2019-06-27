const crypto = require("text-cryptography");

let reverse = new crypto.Reverse();


let en = reverse.encrypt("Hold the Door");
let de = reverse.decrypt(en)

console.log(en) 
console.log(de)
// Encrypt = rooD eht dloH
// Decrypt = Hold the Door



en = reverse.encrypt("Hold the Door...43129!!!?");
de = reverse.decrypt(en);

console.log(en)
console.log(de)
// Encrypt = ?!!!92134...rooD eht dloH
// Decrypt = Hold the Door...43129!!!?