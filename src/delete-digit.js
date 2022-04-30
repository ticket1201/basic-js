const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
/*   throw new NotImplementedError('Not implemented');
 */  // remove line with error and write your code here
 let str = String(n)
 let arr = Array(str.length).fill(str)
/*  console.log(arr) */
  let spliceStr = () => {
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
      newArr.push( Number( arr[i].replace(arr[i][i], '' ) ) )
    }
/*    console.log(newArr) */
   return newArr.sort( (a,b) => b-a)
   
  }
 
 return spliceStr()[0]
}



module.exports = {
  deleteDigit
};
