const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {

  res = {}

  let turns = 2 ** disksNumber - 1
  res['turns'] = turns;
  res['seconds'] = parseInt((3600 / turnsSpeed) * turns);

  return res;

};
