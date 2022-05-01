const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

  try{
    let result = [];

    let funcs = (item, i) => {
      
      if(item == '--double-next'){
        if(arr[i+1]){
          return result.push(arr[i+1])
        }
      }
  
      else if(item == '--double-prev'){
        if(result[i-1]){
          return result.push(arr[i-1])
        }
      }
  
      else if(item == '--discard-prev'){
        if(result[i-1]){
          return result.pop()
        }
      }
  
      else if(arr[i-1] == '--discard-next'){
        if(arr[i]){
          return false
        }
      }

      else if(arr[i] == '--discard-next'){
      	return false
      }
  
      else{
        return result.push(item)
      }

    }

    arr.forEach((item, index) => funcs(item,index))
    return result
  }

  catch{
    throw new Error(`'arr' parameter must be an instance of the Array!`)
  }

}

module.exports = {
  transform
};
