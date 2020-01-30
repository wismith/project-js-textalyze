/**
 * Given an input Array, returns an object containing the count of each item in the input.
 *
 * @param {Array} array - The array of items to count
 * @returns {object} An object containing the counts of the items in the input array
 */
function itemCounts(array) {
  let counts = {};

  // Your code here.
  // Run 'npm test' to see what tests need to pass.
  // See README.md for a written description.

  for (let item of array) {
    if (!counts[item]) {
      counts[item] = 1;
    } else {
      counts[item] += 1;
    }
  }

  return counts;
}

module.exports = itemCounts;
