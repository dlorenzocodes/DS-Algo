const nums = [1,2,3,4,5,6,7];
const k = 3

const rotateArray = (nums, k) => {
    const n = nums.length
    k = k%n
    const rotate = nums.splice(n - k, k)
    nums.unshift(...rotate)
}