const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  matrix = matrix.toString().split(',')
  let cats = 0

  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i] == '^^') cats++
  }
  return cats
};
