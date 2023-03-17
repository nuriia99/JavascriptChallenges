/*
 * Create 3 functions, each one to detect if a string is an heterogram, a isogram or pangram.
 */
var isHeterogram = function (word) {
    var characters = new Set();
    for (const character of word) {
        if (characters.has(character)) return false;
        characters.add(character);
    }
    return true;
};
var isIsogram = function (word) {
    var characters = new Map();
    for (const character of word) {
        if (character !== ' '){
            const number = characters.get(character)
            if (number) characters.set(character, number + 1)
            else characters.set(character, 1)
        }
    }
    let [, prevValue] = Array.from(characters)[0] // how get the first element of a map
    for (const [, value] of characters){ // how iterate on a map
        if(prevValue !== value) return false
    }
    return true;
};
var isPangram = function (word) {
    var characters = new Set();
    for (const character of word) {
        if (!characters.has(character) && character !== ' ') characters.add(character);
    }
    if (characters.size === 26) return true
    return false;
};

var string = 'The quick brown fox juggmps ove456r the lazy dóg';

string = string.normalize('NFKD').replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z ]/g, '')

console.log(isHeterogram(string));
console.log(isIsogram(string));
console.log(isPangram(string));
