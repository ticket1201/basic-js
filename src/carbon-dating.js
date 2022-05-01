const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {



  //find K
  let k = 0.693/HALF_LIFE_PERIOD;


  if(typeof(sampleActivity) === 'string' && parseInt(sampleActivity)){
    if(sampleActivity <= MODERN_ACTIVITY && sampleActivity >= 0){
      return Math.ceil( Math.log(MODERN_ACTIVITY/parseFloat(sampleActivity)) / k )
    }
    else return false
  }
  else return false
}

module.exports = {
  dateSample
};
