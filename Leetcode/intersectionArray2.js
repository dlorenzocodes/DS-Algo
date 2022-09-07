const nums1 = [1,2,2,1]
        const nums2 = [2,2]

        // const nums1 = [4,9,5]
        // const nums2 = [9,4,8,4,9]

        const intersect = (nums1, nums2) => {
            const map = {}
            const result = []

            for(let i of nums1){
                if(!map[i]){
                    map[i] = 1
                } else{
                    map[i]++
                }
            }

            for(let i of nums2){
                if(map[i] > 0){
                    result.push(i)
                    map[i]--
                }
            }

            return result
        }

        intersect(nums1, nums2)
