
function stringToChars(string) {
  let arrayChars = string.split('');
  for (let i = 0; i < arrayChars.length; i++) {
    if (!arrayChars[i].charCodeAt() >= 97 && !arrayChars[i].charCodeAt() <= 122) {
      arrayChars.splice(i, 1);
    }
  }
  return (arrayChars);
}

module.exports = stringToChars;
