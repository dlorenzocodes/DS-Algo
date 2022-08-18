const nums = [1,1,1,3,3,4,3,2,4,2]

const containsDuplicates = nums => {
     let isDuplicate;
     for( let i = 0; i < nums.length; i++){
         for(let j = i + 1; j < nums.length; j++){
             if(nums[i] === nums[j]){
                 isDuplicate = true
             }
         }
     }

    const duplicate = isDuplicate ? true : false
    return duplicate
}

// O(n^2)

containsDuplicates(nums)


const containsDuplicates2 = nums => {
    const duplicates = []
    for( let i = 0; i < nums.length; i++){
        if(duplicates.includes(nums[i])){
            return true
        } else {
            duplicates.push(nums[i])
        }
    }

    return false
}

// o(n)