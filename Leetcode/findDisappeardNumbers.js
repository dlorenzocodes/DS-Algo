const nums = [4,3,2,7,8,2,3,1]

const findDisappearedNumbers = nums => {
    const mySet = new Set(nums)
    const output = []

    for(let i = 0; i < nums.length; i++){
        if(!mySet.has(i + 1)){
            output.push(i + 1)
        }   
    }

    return output
}

findDisappearedNumbers(nums)