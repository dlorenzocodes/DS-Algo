// Find the pair of number that equals to the sum

// const numbers = [1,2,4,4]
// const sum = 8

// Brute force solution
function hasPairWithSum(arr, sum){
    for(let i = 0; i < arr.length-1; i++){
        for(let j = 1; j < arr.length; j++){
            if(arr[i] + arr[j] === sum){
                return true
            }
        }
    }

    return false
}

// O(n^2) ----> time complexity
// O(1) ---> space complexity

hasPairWithSum(numbers, sum)


// Better solution
const numbers = [1,2,4,4]
const sum = 8

function hasPairWithSum2(arr, sum){
    const mySet = new Set();
    for(let i = 0; i < arr.length; i++){
        if(mySet.has(arr[i])){
            return [(sum - arr[i]), arr[i]]
        }

        mySet.add( sum - arr[i]);
    }
    return false
}

hasPairWithSum2(numbers, sum)