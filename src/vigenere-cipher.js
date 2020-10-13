const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(machine) {
    this.machine = machine
  }
  encrypt(message, key) {
    if (message == undefined) return new Error('TROWN')
    if(this.machine === undefined || this.machine) {
      message = message.toUpperCase()
      key = key.toUpperCase()
      let en = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      let square = []
      if (key.length < message.length) {
        for (let i = (message.length - key.length), b = 0; i > 0; i--, b++) {
          key += key[b]
        }
      }
      let genSqViz = () => {
        for (let i = 0; i < en.length; i++) square[i] = en.slice(i).concat(en.slice(0, i));
      }
      genSqViz();
      let s = "";
      for (let i = 0, b = 0; i < message.length; i++, b++) {
        if (en.indexOf(message[i]) < 0) {
          b--
          s += message[i]
        }
        else s += square[en.indexOf(message[i])][en.indexOf(key[b])];
      }
      return s;
    }
    else if(this.machine === false) {
      message = message.toUpperCase().split('').reverse().join('')
      key = key.toUpperCase()
      let en = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      let square = []
      if (key.length < message.length) {
        for (let i = (message.length - key.length), b = 0; i > 0; i--, b++) {
          key += key[b]
        }
      }
      let genSqViz = () => {
        for (let i = 0; i < en.length; i++) square[i] = en.slice(i).concat(en.slice(0, i));
      }
      genSqViz();
      let s = "";
      for (let i = 0; i < message.length; i++) {
        if (en.indexOf(message[i]) < 0) s += message[i]
        else s += square[en.indexOf(message[i])][en.indexOf(key[i])];
      }
      return s.split('').reverse().join('');
    }
}
  decrypt(message, key) {
    if (message == undefined) return new Error('TROWN')
    if(this.machine === undefined || this.machine) {
      return 'AAAA'
    }
    else if(this.machine === false) {
      return 'LOL'
  }
}
}

module.exports = VigenereCipheringMachine;
