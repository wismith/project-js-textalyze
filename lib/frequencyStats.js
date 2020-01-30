function frequencyStats(array) {
    let counts = {};
    let charCount = array.length

    for (let item of array.sort()) {
      if (!counts[item]) {
        counts[item] = 1;
      } else {
        counts[item] += 1;
      }
    }
    for (let key of Object.keys(counts)) {
        counts[key] = counts[key] / charCount
    }
  
    return counts;
  }
  
  module.exports = frequencyStats;
 