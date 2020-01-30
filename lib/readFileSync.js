const fs = require('fs');

function readFileSync(file) {
  let text = fs.readFileSync(file, 'utf-8');
  return text;
}

/*
function readFile(fileName, callback) {
  fs.readFile(fileName, 'utf-8', function(err, data) {
    if (err) {
      throw err;
    }

    callback(data);
  });
}
*/

/*
readFile('../sample_textFiles/mySentence.txt', function(data) {
  console.log('readFile');
  console.log(data);
});
*/

if (require.main === module) {
  console.log('readFileSync');
  console.log(readFileSync('../sample_textFiles/mySentence.txt'));
}
module.exports = readFileSync;
