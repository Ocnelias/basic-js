const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {

    let currentDepth = 0;
    let res = 0;

    if (Array.isArray(arr)) {
      res = currentDepth = 1;
      for (let i = 0; i < arr.length; i++) {
        currentDepth += this.calculateDepth(arr[i]);
        currentDepth > res ? res = currentDepth : currentDepth;
        currentDepth = 1;
      }
      return res;
    }
  }
}
