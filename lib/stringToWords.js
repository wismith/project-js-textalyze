function stringToWords(string) {
    let arrayWords = string.split(' ');
    
    // for (let i = 0; i < arrayWords.length; i++) {
    //     console.log('1. word before slice:', arrayWords[i])
    //     if (arrayWords[i][arrayWords[i].length - 1].charCodeAt() < 97 || arrayWords[i][arrayWords[i].length - 1].charCodeAt() > 122){
    //         arrayWords[i] = arrayWords[i].slice(0,arrayWords[i].length - 1);
    //         console.log('2. word after slice:', arrayWords[i])
    //     }
       
    // }
     for (let i = 0; i < arrayWords.length; i++) {
        for (let j = 0; j < arrayWords[i].length; j++) {
       if(arrayWords[i][j].charCodeAt()< 97 || arrayWords[i][j].charCodeAt() > 122){
          arrayWords[i] = arrayWords[i].slice(0,j)
       }
      }
    }
    
    return arrayWords;
  }
//console.log(stringToWords("hello!', my' name?, is.' joseph'. richards! at? davidson. college which is fun!"));
  module.exports = stringToWords;
  