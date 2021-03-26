const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  res = [];

  let repeatTimes = ('repeatTimes' in options) ? options['repeatTimes'] : 1;
  let additionRepeatTimes = ('additionRepeatTimes' in options) ? options['additionRepeatTimes'] : 1;

  for (let i = 0; i < repeatTimes; i++) {
    res.push(String(str));
    for (let k = 0; k < additionRepeatTimes; k++) {

      if (options['addition'] === null) {
        res.push('null');

      } else {
        res.push(options['addition']);
      }
      if (k + 1 < additionRepeatTimes) {
        res.push(('additionSeparator' in options) ? String(options['additionSeparator']) : '|');
      }
    }
    if ([i + 1] < repeatTimes) {
      res.push(('separator' in options) ? String(options['separator']) : '+');
    }
  }

  return res.join('');
};
