const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  let res = [];

  if (Array.isArray(arr)) {

    for (let i = 0; i < arr.length; i++) {

      if (arr[i] === '--discard-next') {
        i = i + 1;
      } else if (arr[i] === '--discard-prev') {
        if (i === 0 || arr[i - 2] === '--discard-next') {

        } else {
          res.pop();
        }

      } else if (arr[i] === '--double-next') {
        if (i === arr.length - 1) {

        } else {
          res.push(arr[i + 1]);
        }

      } else if (arr[i] === '--double-prev') {
        if (i === 0 || arr[i - 2] === '--discard-next') {

        } else {
          res.push(res[res.length - 1]);
        }
      } else {
        res.push(arr[i]);
      }
    }
  } else {
    throw new Error();
  }

  return res;
}
