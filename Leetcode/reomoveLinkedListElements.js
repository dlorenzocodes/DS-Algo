const listA = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 6,
            next: {
                val: 3,
                next: {
                    val: 4,
                    next: {
                        val: 5,
                        next: {
                            val: 6,
                            next: null
                        }
                    }
                }
            }
        }
    }
}

// const listA = { }

// const listA = {
//     val: 7,
//     next: {
//         val: 7,
//         next: {
//             val: 7,
//             next: {
//                 val: 7,
//                 next: null
//             }
//         }
//     }
// }

const val = 6

const removeElements = (head, val) => {
    while(head && head.val === val) head = head.next
    
    let curr = head
    while(curr && curr.next){
        if(curr.next.val === val){
            curr.next = curr.next.next
        } else{
            curr = curr.next
        }
    }

   console.log(head)
}

removeElements(listA, val) 