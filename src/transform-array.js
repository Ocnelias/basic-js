const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  throw new CustomError('Not implemented');

  if (Array.isArray(arr)) {

    res = [];

    for (let i = 0; i <= arr.length - 1; i++) {
      if (arr[i] === '--discard-next') {
        res.push(arr[i]);
      } else if (arr[i] === '--discard-prev') {
        res.push(arr[i]);
      } else if (arr[i] === '--double-next') {
        res.push(arr[i]);
      } else if (arr[i] === '--double-prev') {
        res.push(arr[i]);
      }
      res.push(arr[i]);
    }
    return res;
  } else {
    throw new CustomError('THROWN');
  }

}

