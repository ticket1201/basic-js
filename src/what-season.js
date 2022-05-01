const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */


function getSeason(date) {
  /* throw new NotImplementedError('Not implemented'); */
  try{
    
    let year = [[0, 1, 11], [2, 3, 4], [5, 6, 7], [8, 9, 10]]
    let monthArr = ['winter', 'spring', 'summer', 'autumn']
    if(!date) return 'Unable to determine the time of year!'
    else if( (typeof( date.getMonth() )  === 'number') && typeof( date.valueOf() ) === 'number'){
      let month = date.getMonth();
      for(let i = 0; i < year.length; i++){
        if(year[i].includes(month)){
          return monthArr[i]
        }
      }
    }
  }
  catch {
    throw new Error("Invalid date!")
  }


 
  
}

module.exports = {
  getSeason
};
