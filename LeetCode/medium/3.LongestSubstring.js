/**
 * Given a string s, find the length of the longest 
substring
 without repeating characters.
 */


 function findLogestSubstring (string) {
  const set = new Set()
  let biggestSize = 0
  let heap = 0
  for(let i=0; i <= string.length -1; i++){
    if(!set.has(string[i])) set.add(string[i])
    else {
      if(biggestSize < set.size) biggestSize = set.size
      set.clear()
      heap++
      i = heap
      set.add(string[i])
    }
  }
  if(biggestSize < set.size) return set.size
  return biggestSize
 }

 console.log(findLogestSubstring('pwwkew'))