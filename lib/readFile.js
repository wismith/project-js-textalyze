const fs = require('fs');

function readFile(file) {
  fs.readFile(file, 'utf-8', (err, data) => {
    if (err) throw err;

    return data;
  });
}

console.log(readFile('../sample_textFiles/mySentence.txt'));
