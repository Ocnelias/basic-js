const CustomError = require("../extensions/custom-error");

const chainMaker = {

  res: [],
  getLength() {
    return this.res.length;
  },
  addLink(value) {

    if (value === undefined) {
      value = ' ';
    }
    this.res.push(String(value));
    return this;

  },
  removeLink(position) {
    if (isNaN(position)) {
      this.res = [];
      throw CustomError('err');
    }
    this.res.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.res.reverse();
    return this;
  },
  finishChain() {
    let resStr = '( ' + this.res.join(' )~~( ') + ' )'
    this.res = [];
    return resStr;
  }
};

module.exports = chainMaker;
