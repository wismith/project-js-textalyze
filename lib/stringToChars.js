
function stringToChars(string) {
  let arrayChars = string.split('');
  let arrayLetters = [];
  for (let i = 0; i < arrayChars.length; i++) {
    if (arrayChars[i].charCodeAt() >= 97 && arrayChars[i].charCodeAt() <= 122) {
      arrayLetters.push(arrayChars[i]);
    }
  }
  return arrayLetters;
}

module.exports = stringToChars;
