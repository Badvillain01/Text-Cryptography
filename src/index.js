const Affine = require("./text-cryptography/affine");
const Atbash = require("./text-cryptography/atbash");
const Baconian = require("./text-cryptography/baconian");
const Caesar = require("./text-cryptography/caesar");
const LatinAlphabet = require("./text-cryptography/latinAlphabet");
const RailFence = require("./text-cryptography/railFence");
const Reverse = require("./text-cryptography/reverse");
const Rot13 = require("./text-cryptography/rot13");
const Rot5 = require("./text-cryptography/rot5");
const Rot18 = require("./text-cryptography/rot18");
const Rot47 = require("./text-cryptography/rot47");
const Vigenere = require("./text-cryptography/vigenere");
const MixedAlphabet = require("./text-cryptography/mixedAlphabet");
const PolybiusSquare = require("./text-cryptography/polybiusSquare");


module.exports = {
  Affine: Affine,
  Atbash: Atbash,
  Baconian: Baconian,
  Caesar: Caesar,
  LatinAlphabet: LatinAlphabet,
  RailFence: RailFence,
  Reverse: Reverse,
  Rot13: Rot13,
  Rot5: Rot5,
  Rot18: Rot18,
  Rot47: Rot47,
  Vigenere: Vigenere,
  MixedAlphabet: MixedAlphabet,
  PolybiusSquare: PolybiusSquare
}

