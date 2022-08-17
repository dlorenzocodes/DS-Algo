const nums = [2,7, 11, 15]
const target = 9

function TwoSum(numbers, sum){
    const mySet = new Set();

    for( let i = 0; i < numbers.length; i++){
        if(mySet.has(numbers[i])){
            return [ numbers.indexOf(sum - numbers[i]), i]
        }

        mySet.add(sum - numbers[i])
    }
}