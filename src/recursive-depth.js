const CustomError = require("../extensions/custom-error");
module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (Array.isArray(arr)) {
      return 1 + Math.max(...arr.map(t => this.calculateDepth(t)))
    } else {
      throw new CustomError('err');
    }
  }
};
