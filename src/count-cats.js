const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {

  if (matrix !== undefined) {
    let res = 0;

    for (let i = 0; i <= matrix.length - 1; i++) {

      for (let k = 0; k <= matrix[i].length - 1; k++) {
        if (matrix[i][k] === '^^') {
          res += 1;
        }
      }

    }
    return res;
  }
  return 0;

};
