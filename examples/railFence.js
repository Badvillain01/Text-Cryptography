const crypto = require("text-cryptography");

// KEY:- greater than 0
// Default = 3
let railFence = new crypto.RailFence(4);


let en = railFence.encrypt("Hold the Door");
let de = railFence.decrypt(en)

console.log(en) 
console.log(de)
// Encrypt = Hhroteol  odD
// Decrypt = Hold the Door



// railfence with new key
railFence.key = 9

en = railFence.encrypt("Hold the Door...43129!!!?");
de = railFence.decrypt(en);

console.log(en)
console.log(de)
// Encrypt = H4o.3l.1d.2 r9to!ho!eD! ?
// Decrypt = Hold the Door...43129!!!?