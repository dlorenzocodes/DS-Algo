// My Solution

// const array = [2,5,1,2,3,5,1,2,4]
// It should return 2 

// const array = [2,1,1,2,3,5,1,2,4]
// It should return 1 

// const array = [2,3,4,5]
// It should return undefined

const firstRecurringCharacter = array => {
    const mySet = new Set()

    for(let i = 0; i < array.length; i++){
        if(mySet.has(array[i])){
            return array[i]
        } else{
            mySet.add(array[i])
        }
    }

    return undefined 
}


firstRecurringCharacter(array)


// Hash Table Solution

// const array = [2,5,1,2,3,5,1,2,4]

function firstRecurringCharacter2(array){
    let map = {}

    for(let i = 0; i < array.length; i++){
        if(map[array[i]] !== undefined){
            return array[i]
        }
            
        map[array[i]] = i
    }

    return undefined
}

firstRecurringCharacter2(array)


// Brute force Solution

const array = [2,5,1,2,3,5,1,2,4]

function firstRecurringCharacter3(array){
    for(let i = 0; i < array.length; i++){
        for( let j = i + 1; j < array.length; j++){
            if(array[i] === array[j]){
                return array[i]
            }

            if(array[j] === array[j + 1]){
                return array[j]
            }
        }
    }

    return undefined
}

firstRecurringCharacter3(array)