const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(machine) {
    this.machine = machine
  }
  encrypt(message, key) {
    if (message == undefined) return new Error('TROWN')
    if(this.machine === undefined || this.machine) {
    message = message.toUpperCase()
    let en = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
    let square = []
    let genSqViz = () => {
    for (let i = 0; i < en.length; i++) square[i] = en.slice(i).concat(en.slice(0, i));
      }
    genSqViz();
    let s = "";
    for (let i = 0; i < message.length; i++) {
      s += square[en.indexOf(message[i])][en.indexOf(key[i])];
    }
    return s;
  }
}
  decrypt(message, key) {
    if (message == undefined) return new Error('TROWN')
    
  }
}

module.exports = VigenereCipheringMachine;
