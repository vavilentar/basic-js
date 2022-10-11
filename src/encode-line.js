const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
	let strArr = str.split('')
	let finalSrt = '';
	for (let i = 0; i < strArr.length; i++) {
		let char = strArr[i]
		if (char != strArr[i-1]){
			finalSrt += `${include(strArr,char)}${char}`
		}
	}
	function include(array,char) {
	    if (array.filter(item => item === char).length > 1){
		    return array.filter(item => item === char).length
	    } else {
		    return ''
	    } 
	}

}

module.exports = {
  encodeLine
};
