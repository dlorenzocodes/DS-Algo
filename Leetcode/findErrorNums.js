const nums = [2,2]

const findErrorNums = nums => {
    const mySet = new Set()
    const errorNums = []

    for(let i = 0; i < nums.length; i++){
        if(mySet.has(nums[i])){
            errorNums.push(nums[i])
        } else{
            mySet.add(nums[i])
        }
    }

    for(let j = 0; j < nums.length; j++){
        if(!mySet.has(j + 1)){
            errorNums.push(j + 1)
        }
    }

    return errorNums
}

findErrorNums(nums)