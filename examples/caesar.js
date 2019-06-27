const crypto = require("text-cryptography");

// shiftNum(default = 2)
let caesar = new crypto.Caesar(12);

let en = caesar.encrypt("Hold the Door");
let de = caesar.decrypt(en)

console.log(en) 
console.log(de)
// Encrypt = aabbbabbbaababbaaabb baabbaabbbaabaa aaabbabbbaabbbabaaab
// Decrypt = Hold the Door


// caesar with new key.
caesar.shiftNum = 9

en = caesar.encrypt("Hold the Door...HODOR!91");
de = caesar.decrypt(en);

console.log(en)
console.log(de)
// Encrypt = Qxum cqn Mxxa...QXMXA!91
// Decrypt = Hold the Door...HODOR!91