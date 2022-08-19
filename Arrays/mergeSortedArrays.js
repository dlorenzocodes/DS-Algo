// const arr1 = [0,3,4,31];
// const arr2 = [4,6,30];

function mergeSortedArrays(arr1, arr2){
    const combinedArrays = [...arr1, ...arr2];
    return combinedArrays.sort((a,b) => { return a - b })
}   

// const arr1 = [0,3,4,31];
// const arr2 = [4,6,30];

function mergeSortedArrays2(arr1, arr2){
  const mergedArrays = []
  let arr1Item = arr1[0]
  let arr2Item = arr2[0]
  let i = 1
  let j = 1

  if(arr1.length === 0) return arr2
  if(arr2.length === 0) return arr1

  while(arr1Item || arr2Item){
    if(arr1Item < arr2Item || !arr2Item){
        mergedArrays.push(arr1Item)
        arr1Item = arr1[i]
        i++
    } else{
        mergedArrays.push(arr2Item)
        arr2Item = arr2[j]
        j++
    }
  }

  return mergedArrays
}



const arr1 = [0,3,4,31];
const arr2 = [4,6,30];

function sortArray(arr1, arr2) {
    const array = [...arr1, ...arr2]
    var temp = 0;
    for (var i = 0; i < array.length; i++) {
        for (var j = i; j < array.length; j++) {
        if (array[j] < array[i]) {
            temp = array[j];
            array[j] = array[i];
            array[i] = temp;
        }
        }
    }
    console.log(array)
}