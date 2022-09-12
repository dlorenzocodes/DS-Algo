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
        const nextNode = {
            value,
            next: null
        }

        console.log(nextNode)
    }
}

const myLinkedList = new LinkedList('apples');
myLinkedList.append('grapes')
console.log(myLinkedList)