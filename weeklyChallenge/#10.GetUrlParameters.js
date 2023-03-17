/*
 * get the parameters of a url without use any operation for that
 *
 * example: https://retosdeprogramacion.com?year=2023&challenge=0
 * result : ["2023", "0"]
 */

const getParameters = (url) => {
  let parameter = ''
  const result = []
  let interrogationCharacterFound = false
  let equalCharacterFound = false
  for(character of url){
    if (interrogationCharacterFound) {
      if(equalCharacterFound) {
        if(character !== '&') parameter = parameter + character
        else {
          result.push(parameter)
          parameter = ''
          equalCharacterFound = false
        }
      }
      else if(character === '=') equalCharacterFound = true
    }
    else if(character === '?') interrogationCharacterFound = true
  }
  result.push(parameter)
  return result
}

console.log(getParameters('https://retosdeprogramacion.com?year=2023&challenge=0'))