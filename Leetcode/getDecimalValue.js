// const list = {
        //     val: 1,
        //     next:{
        //         val: 0,
        //         next: {
        //             val: 1,
        //             next: null
        //         }
        //     }
        // }

        // const list = {
        //     val: 0,
        //     next: null
        // }

const list = {
    val: 1,
    next:{
        val: 0,
        next: {
            val: 0,
            next: {
                val: 1,
                next: {
                    val: 0,
                    next: null
                }
            }
        }
    }
}


const getDecimalValue = list => {
    const listValues = []
    let listHead = list
    let counter

    while(listHead){
        listValues.push(listHead.val)
        listHead = listHead.next
    }
    counter = listValues.length - 1

    for(let i = 0; i < listValues.length; i++){
        listValues[i] = Math.pow(2, counter) * listValues[i]
        counter--
    }

    const decimal = listValues.reduce((prev, curr) => prev + curr, 0)
    return decimal
}

getDecimalValue(list)