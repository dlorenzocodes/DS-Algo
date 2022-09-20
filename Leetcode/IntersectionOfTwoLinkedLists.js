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