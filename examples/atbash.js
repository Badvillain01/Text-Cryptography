const crypto = require("text-cryptography");

// maintainCase true or false :: Default = true
let atbash = new crypto.Atbash();


let en = atbash.encrypt("Hold the Door");
let de = atbash.decrypt(en)

console.log(en) 
console.log(de)
// Encrypt = Slow gsv Wlli
// Decrypt = Hold the Door


// atbash with maintainCase = false and numbers and puncatuation.
atbash.maintainCase = false

en = atbash.encrypt("Hold the Door...HODOR!69");
de = atbash.decrypt(en);

console.log(en)
console.log(de)
// Encrypt = SLOW GSV WLLI...SLWLI!69
// Decrypt = HOLD THE DOOR...HODOR!69