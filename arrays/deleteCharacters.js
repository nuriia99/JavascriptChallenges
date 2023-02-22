// Statement: Create a function that takes two strings as parameters (str1, str2) and prints two other strings as output (out1, out2).
// - out1 will contain all characters present in str1 but NOT present in str2.
// - out2 will contain all characters present in str2 but NOT present in str1.


const splitArray = function (str1, str2) {
  let out1 = str1.toLowerCase().split('')
  let out2 = str2.toLowerCase().split('')
  out1 = out1.filter(c => !str2.toLowerCase().includes(c))
  out2 = out2.filter(c => !str1.toLowerCase().includes(c))
  console.log(out1, out2)
}

splitArray('hello bye Cat dog', 'cat table rubber cat book')