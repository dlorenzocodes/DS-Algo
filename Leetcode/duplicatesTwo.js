
// Brute Force

const nums = [1,0,1,1]
const k = 1

const containsNearbyDuplicate = (nums, k) => {
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] === nums[j] && Math.abs(i - j) <= k){
                return true
            }
        }
    }

    return false
}

containsNearbyDuplicate(nums, k)


// Hash Table Version

const containsNearbyDuplicate2 = (nums, k) => {
    let map ={}

    for(let i = 0; i < nums.length; i++){
        if(map[nums[i]] !== undefined && (i - map[nums[i]]) <= k){
            return true
        }

        map[nums[i]] = i
    }

    return true
}

containsNearbyDuplicate2(nums, k)


