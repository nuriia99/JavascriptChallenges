// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.


function validParenthesis(s) {
  const tracker = []

  for(character of s){
    if(character === '(' || character === '{' || character === '[') tracker.push(character)
    else if(character === ')') {
      if(!tracker.includes('(') || tracker.at(-1) !== '(') return false
      tracker.pop()
    }
    else if(character === '}') {
      if(!tracker.includes('{') || tracker.at(-1) !== '{') return false
      tracker.pop()
    }
    else {
      if(!tracker.includes('[') || tracker.at(-1) !== '[') return false
      tracker.pop()
    }
  }
  if(tracker.length !== 0) return false
  return true
}

console.log(validParenthesis("{[]}"))