
function sanitize(str) {
  return str.toLowerCase();
}

console.log(sanitize('HELLO') === 'hello');
console.log(sanitize('THIS. is, a sENtence!') === 'this. is, a sentence!');
