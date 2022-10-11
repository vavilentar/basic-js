const {
  NotImplementedError
} = require('../extensions/index.js');

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
function createDreamTeam(array) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

	let dt = [];
	for (let i = 0; i < array.length; i++) {
		if (typeof array[i] == 'string') {
			
			let charInd = 0;
			while(array[i].charAt(charInd) == ' ') {
				charInd++
			}
			dt.push(array[i].charAt(charInd))
		} else if (typeof array[i] == 'object') {
			dt.push(array[i][0].charAt(0))
		}
	}
	return dt.sort().join('').toUpperCase();
}

module.exports = {
  createDreamTeam
};