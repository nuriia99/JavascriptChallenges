// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.


const findIndex = (haystack, needle) => {// ssadbutsad
  let index = -1
  for(let i = 0; i < haystack.length ; i++){
    index = i
    for(let j = 0; j < needle.length ; j++){
      if(haystack[i+j] !== needle[j]) {
        index = -1
        break
      } 
    }
    if (index !== -1) break
  }
  return index
}

console.log(findIndex("a", "a"))