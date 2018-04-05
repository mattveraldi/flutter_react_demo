var randomWords = require('random-words');

/**
 * @function
  ---ITA----
  Questa funzione ritorna un array di coppie di parole inglesi casuali.
 * @param { number } wordsNumber - numero di coppie di parole inserite nell'array
 * @returns { array }
  ---ENG----
  This funzione returns an array of english random word pairs.
 * @param { number } wordsNumber - number of word pairs pushed into the array
 * @returns { array }
 */

export default getWordsPairArrayPascalCase = (wordsNumber) => {
    var raw = randomWords(wordsNumber*2);
    var result= [];
    var token= "";

    for(var i=0; i< wordsNumber*2; i++){
        token += raw[i].toString().slice(0,1).toUpperCase().concat(raw[i].toString().slice(1));
        if((i+1)%2 == 0) {
            result.push(token);
            token = ""
        }
    }
    return result;
}