
function stringToChars(string) {
  let arrayChars = [];
  for (let i of string) {
    arrayChars.push(i);
  }
  return (arrayChars);
}
stringToChars('Hello');

module.exports = stringToChars;
