const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let sampleActivityNumber = parseFloat(sampleActivity);
  let age = Math.log(MODERN_ACTIVITY / sampleActivityNumber) * HALF_LIFE_PERIOD / 0.693;
  return ((typeof sampleActivity !== 'string') || isNaN(sampleActivityNumber) || (sampleActivityNumber <= 0 || sampleActivityNumber >= 15)) ? false : Math.ceil(age);
  // remove line with error and write your code here
};
