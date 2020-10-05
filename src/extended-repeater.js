const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let arr = [str]
  let tempI = 1

  if (options.addition !== undefined) {
  arr[0] +=  '' + options.addition }
  if (options.addition !== undefined) {
    for (let i = 1; i < options.additionRepeatTimes ; i++) {
      arr[0] += options.additionSeparator + '' + options.addition
    }
  }
  let fa = arr[0]
  for (let i = 1; i < options.repeatTimes; i++, tempI++) {
    if(options.separator == null) {
      arr[0] += '+' + fa
    } else arr[0] += options.separator + fa
  }
  return arr.join('')
};
  