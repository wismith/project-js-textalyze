function stringToWords(string) {
  let arrayWords = string.split(' ');
  console.log(arrayWords[10][-1]);

  for (let i = 0; i < arrayWords.length; i++) {
    for (let j = 0; j < arrayWords[i].length; j++) {
      if (arrayWords[i][j].charCodeAt() < 97 || arrayWords[i][j].charCodeAt() > 122) {
        arrayWords[i] = arrayWords[i].slice(0, j);
      }
    }
  }

  return arrayWords;
}

// let arrayNewWords = [];
// for (let i = 0; i < arrayChars.length; i++) {
//   if (arrayWords[i].charCodeAt() >= 97 && arrayWords[i].charCodeAt() <= 122) {
//   }
//   for(let j = 0; j < i.length; j++){
//       if(arrayWords[i][j].charCodeAt()< 97 || arrayWords[i][j].charCodeAt() > 122){

//           //arrayNewWords.push(arrayChars[i][]);
//       }

//   }

// }

if (require.main === module) {
  console.log(stringToWords('Hello, my name, is Joseph. Richards at Davidson. College which is fun!'));
}
module.exports = stringToWords;
