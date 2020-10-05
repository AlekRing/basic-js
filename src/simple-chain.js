const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  itr: 0,
  temp: '',
  tempArr: [],
  getLength() {
    return this.arr.length
  },
  addLink(tostr) {
    this.arr[this.itr] = '( ' + tostr + ' )'
    this.itr++

    return this
  },
  removeLink(position) {
    if (position <= 0 || typeof(position) !== 'number' || position > this.itr) {
      this.arr = []
      this.itr = 0
      return new error('THROWN')
    }
    for (let i = position - 1; i < this.arr.length ; i++) {
      this.arr[i] = this.arr[i + 1]
    }
    this.arr.pop()
    this.itr--
    return this
  },
  reverseChain() {
    this.arr = this.arr.reverse()
    return this
  },
  finishChain() {
    this.tempArr = this.arr.join('~~')
    this.arr = []
    this.itr = 0
    return this.tempArr
  }
};

module.exports = chainMaker;
