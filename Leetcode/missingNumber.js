const nums = [0,2]
        
const missingNumber = nums =>{
    const mySet = new Set(nums)

    for(let j = 0; j <= nums.length; j++){
        if(!mySet.has(j)){
            return j
        }
    }

    return -1
}

missingNumber(nums)