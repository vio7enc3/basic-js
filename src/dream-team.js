const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false; 
    var name = '';
    var repArr = [];
  for(var i = 0; i < members.length; i++){
    if (typeof members[i] === 'string'){
      repArr[i] = members[i].replace(/\s/g, '');
    name += repArr[i][0];
    }
  }
  return name.toUpperCase().split('').sort(function(a, b) {
    return a.localeCompare(b);}).join('');
}

