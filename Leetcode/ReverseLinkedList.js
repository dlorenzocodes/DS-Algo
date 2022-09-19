const list = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: null
            }
        }
    }
}


var reverseList = function(head) {
    let prev = null
    let curr = head
    let temp = null

    while(curr){
        temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp
    }

    return prev
};  

reverseList(list)