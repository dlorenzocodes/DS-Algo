class newNode{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor(value){
        this.head = {
            value,
            next: null,
            prev: null
        }

        this.tail = this.head
        this.length = 1
    }

    append(value){
        const node = new newNode(value)
        node.prev = this.tail

        this.tail.next = node
        this.tail = node
        this.length++
    }


    prepend(value){
        const newHead = new newNode(value)
        this.head.prev = newHead
        newHead.next = this.head

        this.head = newHead
        this.length++
    }

    printList(){
        let listValues = []
        let currentNode = this.head
        let counter = 0
        while(counter <= this.length){
            listValues.push(currentNode.value)
            currentNode = currentNode.next
            counter++
        }
        console.log(listValues)
    }

    traverse(index){
        let counter = 0
        let currentNode = this.head
        while(counter !== index){
            currentNode = currentNode.next
            counter++
        }
        return currentNode
    }

    insert(index, value){
        if(index >= this.length){
            return this.append(value)
        }

        const newElement = new newNode(value)
        const leader = this.traverse(index - 1)
        let follower = leader.next
        leader.next = newElement
        newElement.next = follower
        newElement.prev = leader
        follower.prev = newElement
    }

    remove(index){
        if(index <= 0){
            this.length--
            const newHead = this.head.next
            this.head = newHead
            newHead.prev = null
            return
        }

        const prev = this.traverse(index - 1)
        const unwanted = prev.next
        const aft = unwanted.next


        if(index >= this.length){
            prev.next = null
            this.tail = prev
        } else{
            prev.next = unwanted.next
            aft.prev = unwanted.prev
        }
        
        this.length--
    }
}

const myLinkedList = new DoublyLinkedList('apples');
myLinkedList.append('grapes')
// myLinkedList.append('pears')
myLinkedList.prepend('kiwi')
myLinkedList.prepend('mango')
myLinkedList.insert(2, 'pears')
myLinkedList.remove(4)
myLinkedList.printList()
console.log(myLinkedList)
