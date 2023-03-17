// You are given the heads of two sorted arrays list1 and list2.

// Merge the two arrays in a one sorted array. The array should be made by splicing together the nodes of the first two lists.

function sliceArray(list1, list2) {
  const result = []
  let indexList2 = 0
  for(indexList1 in list1){
    while(list1[indexList1] >= list2[indexList2]){
      result.push(list2[indexList2])
      indexList2++
    }
    result.push(list1[indexList1])
  }
  return result.concat(list2.slice(indexList2))
}

function mergeLists(list1, list2) {
  if(list1.length >= list2.length) return sliceArray(list2, list1)
  else return sliceArray(list1, list2)
}

console.log(mergeLists([], [0]))