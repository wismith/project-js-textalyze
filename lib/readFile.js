const fs = require('fs');

function readFile(file) {
  let text = fs.readFileSync(file, 'utf-8');
  return text;
}

console.log(readFile('../sample_textFiles/mySentence.txt'));
