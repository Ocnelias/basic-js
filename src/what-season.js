const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

  let mapping = {
    0: 'winter',
    1: 'winter',
    2: 'spring',
    3: 'spring',
    4: 'spring',
    5: 'summer',
    6: 'summer',
    7: 'summer',
    8: 'fall',
    9: 'fall',
    10: 'fall',
    11: 'winter'
  }
  if (date === undefined) {
    return 'Unable to determine the time of year!'
  } else if (date instanceof Date && !isNaN(date)) {
    return mapping[date.getMonth()];
  } else {
    throw new CustomError('THROWN');
  }

}

