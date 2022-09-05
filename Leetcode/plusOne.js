    // const digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
    // const digits = [8]
    // const digits = [9,9]
    const digits = [9]

       const plusOne = digits => {
        for(let i = digits.length -1; i >=0; i--){
            if(digits[i] === 9){
                digits[i] = 0
                if(digits[i] === digits[0]){
                    digits.unshift(1)
                }
            } else{
                digits[i] += 1
                break
            }
        }

       return digits
       }

       plusOne(digits)