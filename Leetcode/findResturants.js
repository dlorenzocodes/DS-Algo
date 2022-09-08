// const list1 = ["Shogun","Tapioca Express","Burger King","KFC"]
// const list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]

// const list1 = ["Shogun","Tapioca Express","Burger King","KFC"]
// const list2 = ["KFC","Shogun","Burger King"]

// const list1 = ["Shogun","Tapioca Express","Burger King","KFC"]
// const list2 = ["KFC","Burger King","Tapioca Express","Shogun"]

// const list1 = ["happy","sad","good"]
// const list2 = ["sad","happy","good"]

const list1 = ["Shogun","Tapioca Express","Burger King","KFC"]
const list2 = ["KFC","Shogun","Burger King"]

const findRestaurant = (list1, list2) => {
    const map = {}
    let output = []
    let minSumIndex = Infinity

    for(let i = 0; i < list1.length; i++){
        map[list1[i]] = i
    }

    for(let j = 0; j < list2.length; j++){
        if(map[list2[j]] !== undefined){
            const currentSumIndex =  map[list2[j]] + j

            if(currentSumIndex < minSumIndex){
                output = [list2[j]]
                minSumIndex = currentSumIndex
            } else if(currentSumIndex === minSumIndex){
                output.push(list2[j])
            }
        }
    }

    console.log(output)
    return output
}

findRestaurant(list1, list2)