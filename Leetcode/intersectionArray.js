const nums1 = [1,2,2,1]
const nums2 = [2,2]

// const nums1 = [4,9,5]
// const nums2 = [9,4,9,8,4]

const intersection = (nums1, nums2) => {
    const mySet = new Set(nums1)
    const intersection = []

    for(let i = 0; i <nums2.length; i++){
        if(mySet.has(nums2[i])){
            intersection.push(nums2[i])
            mySet.delete(nums2[i])
        }
    }

    return intersection
}

intersection(nums1, nums2)