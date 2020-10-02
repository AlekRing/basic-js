const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let str = ''
  let abb = ''
  
  if (!members) return false
  for (let i = 0; i <= members.length; i++) {
    if (typeof(members[i]) === 'string') {
      str = members[i].replace(/ /g, '').toUpperCase()
      abb += str[0]
    }
  }
  return abb.split('').sort().join('')
};
