const listA = {
    val: 4,
    next: {
        val: 1,
        next: {
            val: 8,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: null
                }
            }
        }
    }
}

const listB = {
    val: 5,
    next: {
        val: 6,
        next: {
            val: 1,
            next: {
                val: 8,
                next: {
                    val: 4,
                    next: {
                        val: 5,
                        next: null
                    }
                }
            }
        }
    }
}


const getIntersectionNode = (headA, headB) => {
    let pointerA = listA
    let pointerB = listB
    

    while(pointerA !== pointerB){
        pointerA = pointerA.next
        pointerB = pointerB.next

        if(pointerA === pointerB){
            console.log(pointerA)
            return pointerA
        }

        if(pointerA === null){
            pointerA = listB
        }

        if(pointerB === null){
            pointerB = listA
        }
    }

    return pointerA
}

getIntersectionNode(listA, listB)


// Larger version

const getIntersectionNode2 = (headA, headB) => {
            
    // find length of A
    let lengthA = 0
    let tempA = headA
    while(tempA){
        lengthA++
        tempA = tempA.next
    }

    // find length of B
    let lengthB = 0
    let tempB = headB
    while(tempB){
        lengthB++
        tempB = tempB.next
    }

    let diff = Math.abs(lengthA - lengthB)

    tempA = headA
    tempB = headB

    if(lengthA > lengthB){
        while(diff-- > 0){
            tempA = tempA.next
        }
    }else{
        while(diff-- > 0){
            tempB = tempB.next
        }
    }


    // Check for equality
    while(tempA !== tempB){
        tempA = tempA.next
        tempB = tempB.next

        if(tempA == null || tempB == null){
            console.log(null)
            return null
        }
    }

    console.log(tempA)
}

getIntersectionNode2(listA, listB)