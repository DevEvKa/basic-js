const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let dreamTeam = [];
  if ( !Array.isArray(members) || members.length==0) {
    return false
  } else {
    for (let i=0; i<members.length; i++) {
      if(typeof members[i] === "string" && members[i]!== ' ') {
        dreamTeam.push(members[i].trimLeft()[0].toUpperCase())
      }
    }
  }
  return dreamTeam.sort().join('')
};
