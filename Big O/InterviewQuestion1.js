// Given 2 arrays, create a function that
// let's the user know(true/false) whether
// these two arrays contain any common items
// For Example:
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z','y','i'];
// should return false
// ------------------------------
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z','y','x'];
// should return true


// Questions
// How large could the arrays can get? for time and space complexity puproses
// is time complexity or space complexity for important?


// Thought process
// 2 parameters - arrays - no size limit
// return true or false


// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z','y','x'];

// Brute force solution
// function commonItems(array1, array2){
//     for(let i = 0; i < array1.length; i++){
//         for(let j = 0; j < array2.length; j++){
//             if(array1[i] === array2[j]){
//                 return true;
//             }
//         }
//     }
//     return false;
// }
// O(a*b) ----> time complexity
// O(1) –---> space complexity



// Better solution
// common pattern for nested loops are hashed tables
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z','y','x'];
function containsCommonItem2(arr1, arr2){
    // loop through first array & create and obj
    // where properties === items in the array
    let map = {}
    for(let i=0; i < arr1.length; i++){
        const item = arr1[i]
        map[item] = true
    }

    // loop through second array and check if item
    // in second array exists on created object
    for(let j = 0; j < arr2.length; j++){
       if(map[arr2[j]]) return true
    }
    return false
}

// O(a+b) ---> time complexity
// O(n) ----> space complexity


// Better version using ES6
function containsCommonItem3(arr1,arr2){
    return arr1.some(item => arr2.includes(item))
}

containsCommonItem3(array1, array2)