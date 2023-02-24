
// Given a roman numeral, convert it to an integer.

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const romanNumbers = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000]
  ])
  const exceptions = new Map([
      ['IV', 4],
      ['IX', 9],
      ['XL', 40],
      ['XC', 90],
      ['CD', 400],
      ['CM', 900]
  ])
  let sum = 0
  for(let i=0; i<s.length; i++){
    const exceptionsValue = exceptions.get(s[i] + s[i+1])
      if(exceptionsValue !== undefined){
        sum += exceptionsValue
        i++
      } else {
        sum += romanNumbers.get(s[i])
      }
  }
  return sum
};

console.log(romanToInt('LVIII'))