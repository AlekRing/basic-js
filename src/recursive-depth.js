const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let findD = (arr) => {
      return Array.isArray(arr) ? 1 + arr.reduce(function(a, b) {
      return Math.max(a, findD(b));
      }, 0) : 0;
    }
    return findD(arr)
    }
  }