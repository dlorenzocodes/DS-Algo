const str = 'Hi my name is Donna'

function reverse(str){
    const strArray = str.split('')
    const reversedString = []
    for(let i = strArray.length - 1; i >= 0; i--){
        reversedString.push(strArray[i])
    }

    return reversedString.join().replace(/\,/g, '')
}
// O(n)

function reverse2(str){
    return str.split('').reverse().join('')
}

const reverse3 = str => str.split('').reverse().join('')

const arr = [1,2,3,4]

const reverseArray = arr => {
    let first = 0
    let last = arr.length - 1

    while( first < last ){
        const firstElement = arr[first]
        const lastElement = arr[last]
        arr[last] = firstElement
        arr[first] = lastElement
        first++
        last--
    }
    console.log(arr)
}

reverseArray(arr)