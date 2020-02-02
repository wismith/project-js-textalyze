let itemCounts = require('./itemCounts');

function wordStats(arrayOfWords) {
  let counts = itemCounts(arrayOfWords);

  let greatestFrequencies = Object.values(counts).sort().reverse().slice(0, 5);

  let mostCommon = {};
  for (let key of Object.keys(counts)) {
    if (greatestFrequencies.includes(counts[key])) {
      mostCommon[key] = counts[key];
    }
  }
  return mostCommon;
}

if (require.main === module) {
  console.log(wordStats(['hello', 'mother', 'i', 'will', 'mother', 'mother', 'i']));
}

function wordSummary(arrayOfWords) {
  let totalWords = arrayOfWords.length;
  let counts = {};
  for (let word of arrayOfWords) {
    if (!counts[word]) {
      counts[word] = 1;
    } else {
      counts[word] += 1;
    }
  }
  let numDiffWords = Object.keys(counts).length;
  return [totalWords, numDiffWords];
}

module.exports = {
  wordStats,
  wordSummary,
};
