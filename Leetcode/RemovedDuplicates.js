const head = [1,1,2]

const linkedList = {
    value: 1,
    next:{
        value: 1,
        next: {
            value: 2,
            next: null
        }
    }
}

var deleteDuplicates = function(head) {
    let linkedHead = head
    while(linkedHead && linkedHead.next){
        if(linkedHead.val === linkedHead.next.val){
            linkedHead.next = linkedHead.next.next
        } else{
            linkedHead = linkedHead.next 
        }
    }

    console.log(head)
};

deleteDuplicates(linkedList)