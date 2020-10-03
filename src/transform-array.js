const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr) || !arr) return  new error('THROWN')
  else if (arr == null || arr == undefined) return 'THROWN'
  let newArr = []

  for (let i = 0, chek = 0; i < arr.length; i++, chek++) {
    
    if (i === 0 && (arr[i] === `--double-prev` || arr[i] === '--discard-prev')) { chek-- }
    else if (i + 1 === arr.length && (arr[i] === `--discard-next` || arr[i] === '--double-next')) i++ 
    else if (arr[i] === `--double-prev`) newArr[chek] = arr[i - 1]
    else if (arr[i] === `--discard-next` && arr[i + 2] === '--double-prev') {
      chek--
      i += 2
    }
    else if (arr[i] === `--discard-next` && arr[i + 2] === '--discard-prev') {
      chek--
      i += 2
    }
    else if (arr[i] === `--discard-next`) {
      chek--
      i++
    }
    else if (arr[i + 1] === '--discard-prev') {
      i++
      chek--
    }
    else if (arr[i] === `--double-next`) newArr[chek] = arr[i + 1]
    else newArr[chek] = arr[i]
  }
  
  return newArr
};
