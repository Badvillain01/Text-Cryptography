const crypto = require("text-cryptography");

let baconian = new crypto.Baconian();

let en = baconian.encrypt("Hold the Door");
let de = baconian.decrypt(en)

console.log(en) 
console.log(de)
// Encrypt = aabbbabbbaababbaaabb baabbaabbbaabaa aaabbabbbaabbbabaaab
// Decrypt = Hold the Door