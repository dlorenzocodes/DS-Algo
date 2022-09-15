const basket = ['apples', 'grapes', 'pears']

// Linked List

// let myLinkedList = {
//     head: {
//         value: 'apples',
//         next: {
//             value: 'grapes',
//             next: {
//                 value: 'pears',
//                 next: null
//             }
//         }
//     }
// }

class newNode{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(value){
        this.head = {
            value,
            next: null
        }

        this.tail = this.head
        this.length = 1
    }

    append(value){
        const nextNode = new newNode(value)
        this.tail.next = nextNode
        this.tail = nextNode
        this.length++
    }

    prepend(value){
        const newHead = new newNode(value)
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
        const holdingPointer = leader.next
        leader.next = newElement
        newElement.next = holdingPointer
        this.printList()
    }

    remove(index){
        if(index <= 0){
            this.length--
            return this.head = this.head.next
        }

        const prev = this.traverse(index - 1)
        const unwanted = prev.next


        if(index >= this.length){
            unwanted.next = null
            this.tail = prev
        } else{
            prev.next = unwanted.next
        }
        
        this.length--
    }

    reverse(){
        let first = this.head
        let second = first.next
        this.tail = this.head

        while(second){
            const temp = second.next
            second.next = first
            first = second
            second = temp
        }

        
        this.head.next = null
        this.head = first
        console.log(this)
    }
}

const myLinkedList = new LinkedList('apples');
myLinkedList.append('grapes')
myLinkedList.append('pears')
myLinkedList.prepend('kiwi')
myLinkedList.prepend('mango')
myLinkedList.insert(1, 'strawberry')
myLinkedList.remove(4)
myLinkedList.printList()