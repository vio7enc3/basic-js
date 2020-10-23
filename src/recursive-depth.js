const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;

    let count = 0;
    arr.forEach(el => {
      if (Array.isArray(el)) {
        const countDepth = this.calculateDepth(el);
        if (count < countDepth) {
          count = countDepth;
        }
      }
    });

    depth += count;
    return depth;
  }
};