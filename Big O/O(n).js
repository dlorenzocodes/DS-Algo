const nemo = ['nemo'];

function findNemo(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] === 'nemo'){
            console.log('Found Nemo!')
        }
    }
}

findNemo(nemo); // O(n) --> Linear Time

// The Big O or runtime of this operation is linear because
// as the number of elements in the array increase, the number
// of operations increases. The Big O depends on the number of 
//  items, in this case n.
