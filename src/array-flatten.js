/**
 * Recursively flattens array.
 *
 * For non Array inputs it returns an empty array
 *
 * @param {Array} arrayToFlatten
 * @returns {Array} flattened Array
*/
const flatten = (arrayToFlatten) => {
  return Array.isArray(arrayToFlatten) ?
    [].concat(...arrayToFlatten.map(arrayMember => (Array.isArray(arrayMember) ? flatten(arrayMember) : arrayMember))) :
    []
};

module.exports = {
  flatten
}