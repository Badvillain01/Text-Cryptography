const crypto = require("text-cryptography");

// KEYWORD:- only Alphabets
// maintainCase:- Default = true
let mixAlpha = new crypto.MixedAlphabet("keyword");


let en = mixAlpha.encrypt("Hold the Door");
let de = mixAlpha.decrypt(en)

console.log(en) 
console.log(de)
// Encrypt = Ajgw qao Wjjn
// Decrypt = Hold the Door



// mixAlphabet with new keyword and maintainCase = false
mixAlpha.keyword = "helloworld"
mixAlpha.maintainCase = false

en = mixAlpha.encrypt("Hold the Door...43129!!!?");
de = mixAlpha.decrypt(en);

console.log(en)
console.log(de)
// Encrypt = AJGW QAO WJJN...43129!!!?
// Decrypt = HOLD THE DOOR...43129!!!?