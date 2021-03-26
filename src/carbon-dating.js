const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  return /^\d+$|^\d+\.\d+$/.test(sampleActivity) &&
  typeof sampleActivity === "string" &&
  Number(sampleActivity) > 0 &&
  Number(sampleActivity) < 15
    ? Math.ceil(Math.log2(sampleActivity / MODERN_ACTIVITY) * -HALF_LIFE_PERIOD)
    : false;
};
