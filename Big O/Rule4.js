function dropNoneDominant(numbers){

    numbers.forEach(number => { // O(n)
        console.log(number)
    });

    numbers.forEach(number => { // O(n)
        numbers.forEach(secondNumber => { // O(n)
            console.log(number + secondNumber)
        })
    });
}

// O(n + O(n^2)) -----> O(n^2)