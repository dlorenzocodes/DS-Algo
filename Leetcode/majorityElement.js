let map = {}

const nums = [3,2,3]

const majorityElement = nums => {
    let map = {}

    for(let i = 0; i < nums.length; i++){
        if(map[nums[i]] !== undefined){
            map[nums[i]] = map[nums[i]] + 1
        } else{
            map[nums[i]] = 0
        }
    }

    let maxValue = Math.max(...Object.values(map))
    let maxNumber = Object.keys(map).filter( key => map[key] === maxValue)

    return maxNumber.toString()
}

majorityElement(nums)