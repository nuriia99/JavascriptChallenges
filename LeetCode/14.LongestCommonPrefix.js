// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

function commonPrefix(strs) {
  let result = ""
  for(index in strs[0]){
    if(!strs.every(word => word[index] === strs[0][index])) break
    result = result + strs[0][index]
  }
  return result
}

console.log(commonPrefix(["flower","flow","flight"]))