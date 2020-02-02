let itemCounts = require('./itemCounts');

function frequencyStats(array) {
  let counts = itemCounts(array);
  let charCount = array.length;

  for (let item of array) {
    if (!counts[item]) {
      counts[item] = 1;
    } else {
      counts[item] += 1;
    }
  }
  for (let key of Object.keys(counts)) {
    counts[key] = counts[key] / charCount;
  }

  return counts;
}

module.exports = frequencyStats;
