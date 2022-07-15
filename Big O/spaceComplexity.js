// What causes space complexity?
// variables
// data structures
// function call
// allocations


function boooo(n){
    for(let i = 0; i < n; i++){
        console.log('booooo!')
    }
}

boooo(6) // O(1) ----> because we are not saving anything except 
        // assigning the 'i' variable


function arrayOfHiNTimes(n){
    let hiArray = []
    for(let i = 0; i < n; i++){
        hiArray[i] = 'hi'
    }

    return hiArray;
}

arrayOfHiNTimes(6)  // O(n) ----> because we are saving data to a data structure
                    