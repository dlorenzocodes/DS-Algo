const str = 'Hi my name is Donna'

function reverse(str){
    const strArray = str.split('')
    const reversedString = []
    for(let i = strArray.length - 1; i >= 0; i--){
        reversedString.push(strArray[i])
    }

    return reversedString.join().replace(/\,/g, '')
}