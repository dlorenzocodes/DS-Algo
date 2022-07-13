// Log all pairs of array
const boxes = [1,2,3,4,5];

function pairsOfNumbers(array){
    for(let i = 0; i < array.length; i++){
        for(let j = 1; j < array.length; j++){
            console.log(array[i], array[j])
        }
    }
}

pairsOfNumbers(boxes)

// O(n^2) - Quadratic Time