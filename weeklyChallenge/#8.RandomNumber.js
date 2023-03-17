
/*
  * Creates a pseudorandom number generator between 0 and 100.
  * - You cannot use any "random" (or similar) function of the
  * selected programming language.
  */


let number = new Date(); 

function randomNumber() {
  return number.getTime() % 101
}


console.log(randomNumber())