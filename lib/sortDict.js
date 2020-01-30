function sortDict(dict) {
  let keys = Object.keys(dict).sort();
  const sortedDict = {};
  for (let key of keys) {
    sortedDict[key] = dict[key];
  }
  return sortedDict;
}

console.log(sortDict({ 'b': 2, 'a': 1, 'c': 3 }));

module.exports = sortDict;
