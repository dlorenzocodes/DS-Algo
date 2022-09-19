const list = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
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

const middleNode = head => {
    let curr = head
    let counter = 0
    let middle = head

    while(curr){
        counter++
        if(counter % 2 == 0){
            middle = middle.next
        }

        curr = curr.next
    }

    return middle
}

middleNode(list)