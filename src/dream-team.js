const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  res = [];

  if (members !== undefined && Array.isArray(members) === true) {

    members = members.map(function(e) {
      if (typeof (e) === 'string') {
        return e.trim().toUpperCase();
      }
    }).sort();

    for (let i in members) {
      if (typeof (members[i]) === 'string') {
        res.push(members[i].trim().substr(0, 1).toUpperCase());
      }
    }
    return res.join('');
  }
  return false;
};
