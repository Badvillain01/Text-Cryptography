const crypto = require("text-cryptography");

// removeSpace(default = false)
let latinAlpha = new crypto.LatinAlphabet();

let en = latinAlpha.encrypt("Hold the Door");
let de = latinAlpha.decrypt(en)

console.log(en) 
console.log(de)
// Encrypt = 8 15 12 4 -- 20 8 5 -- 4 15 15 18
// Decrypt = HOLD THE DOOR



latinAlpha.removeSpace = true

en = latinAlpha.encrypt("Hold the Door...HODOR!91");
de = latinAlpha.decrypt(en);

console.log(en)
console.log(de)
// Encrypt = 8 15 12 4 20 8 5 4 15 15 18 . . . 8 15 4 15 18 !
// Decrypt = HOLDTHEDOOR...HODOR!