// Data structures are a collection of values
// Types of DS
// Arrays
// Stacks
// Queues
// Linked Lists
// Trees
// Tries
// Graphs
// Hash Tables

// ---------------------------------->
// ARRAYS
// organizes items sequentially - one after another
// good if all you need is to store some data 
// and iterate over it

const strings = ['a', 'b', 'c', 'd'];
// 4*4 = 16 bytes of storage on a 32 bit system

// push
strings.push('e') // O(1)

// pop
strings.pop('e') // O(1)

// unshift
strings.unshift('x') // O(n)

// splice
strings.splice(2, 0, 'alien') // O(n)

// Types of Arrays
// Static & Dynamic

// Stratic arrays are limiting since 
// the number of items it can hold needs to 
// be specified

// Dynamic allows to copy and rebuild an array

// Building an Array from scratch
class MyArray {
    constructor(){
        this.length = 0
        this.data = {}
    }

    get(index) {
        return this.data[index]
    }

    push(item){
        this.data[this.length] = item
        this.length++
        return this.length
    }

    pop(){
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1]
        this.length--
        return lastItem
    }

    delete(index){
        const item = this.data[index];
        this.shiftItems(index);
        return item
    }

    shiftItems(index){
        for(let i = index; i < this.length - 1; i++){
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length - 1]
        this.length--
    }
}

const newArray = new MyArray();


