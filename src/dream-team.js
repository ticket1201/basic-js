const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

 function createDreamTeam(members) {
  let arr = [];

  // check member type


  if(!members || !Array.isArray(members) ){
    return false
  }
 

  // find first latter
  let findFirstLatter = (word) => {
    
    for(let i=0; i < word.length; i++){
      if(word[i] != ' ' && typeof(word[i]) === 'string'){
        return word[i].toUpperCase()
      }
    }
  }



  members.sort().forEach(item => { if(typeof(item) === 'string') arr.push( findFirstLatter(item) ) } )

  return arr.sort().join('')
}


module.exports = {
  createDreamTeam
};
