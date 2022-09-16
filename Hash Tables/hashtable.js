
class HashTable{
    constructor(size){
        this.data = new Array(size)
    }

    set(key,value){
        const address = this._hash(key)
        if(!this.data[address]){
            this.data[address] = []
        }
        
        this.data[address].push([key, value])
        console.log(this.data)
    } //O(1)

    get(key){
        const address = this._hash(key)
        const currentBucket = this.data[address]

        if(currentBucket){
            for(let i = 0; i < currentBucket.length; i++){
                if(currentBucket[i][0] === key){
                    console.log(currentBucket[i][1])
                    return currentBucket[i][1]
                }
            }
        }

        return undefined
    } //O(1) if no collisions

    _hash(key){
        let hash = 0
        for(let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) %
            this.data.length
        }
        return hash
    }

    keys(){
        const arr = this.data
        for(let i = 0; i < arr.length; i++){
            if(arr[i] !== undefined){
                console.log(arr[i][0][0])
            }
        }
    }

}

const myHashTable = new HashTable(50)
myHashTable.set('grapes', 10000)
myHashTable.set('apples', 54)
myHashTable.set('oranges', 2)
myHashTable.keys()
myHashTable.get('grapes')