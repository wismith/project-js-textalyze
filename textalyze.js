// This is the base code for v0.1 of our JavaScript text analyzer.
// Visit https://github.com/jfarmer/project-js-textalyze to see what to do.

// Send a message in Slack if you're stuck or unsure what to do.  These
// comments are here to help you, but please delete them as you go along.

// Open lib/itemCounts.js to get started on the first iteration.
// let itemCounts = require('./lib/itemCounts');

let frequencyStats = require('./lib/frequencyStats');
let readFileSync = require('./lib/readFileSync');
let sanitize = require('./lib/sanitize');
let stringToChars = require('./lib/stringToChars');
let process = require('process');
let fs = require('fs');
let helpers = require('./printHelpers');

// Define functions for handling error cases
function printUsage() {
  console.log('Usage');
  console.log(' node textalyze.js <fileName>');
}
function printError(errorMsg) {
  console.log(`Error: ${errorMsg}`);
}
function printErrorAndExit(errorMsg) {
  printError(errorMsg);
  printUsage();
  process.exit();
}
function textalyze() {
  let file = process.argv[2];

  // Implement error-handling functions
  if (file === undefined) {
    printErrorAndExit('Error: No file given to analyze.');
  }
  if (!fs.existsSync(file)) {
    printErrorAndExit(`No such file ${file}`);
  }

  // Return resulting statistics
  return frequencyStats(stringToChars(sanitize(readFileSync(file))));
}

// console.log(textalyze('./sample_data/great-gatsby.txt'));

// let counts = itemCounts(sampleInput);

// Object.keys returns an array of keys for the given object.
// See https://javascript.info/keys-values-entries
/*
for (let item of Object.keys(counts)) {
  let count = counts[item];

  console.log(`${item}\t${count}`);
}
*/

let data = textalyze(); // "data" will be an object/dictionary

for (let key of Object.keys(data)) {
  let percent = (100 * data[key]).toFixed(2);
  helpers.print(key);
  helpers.print(`  [ ${percent} % ] `);
  helpers.printCountTimes('=', percent * 5);
  helpers.printNewLine();
}
