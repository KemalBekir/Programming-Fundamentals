function addAndSubstract(array){
    let sum = 0;
    let newSum = 0;
    let list = [];

    for(let i = 0; i < array.length; i++){
        let currentNumber = array[i];
        let newNumber = 0;

        if(currentNumber % 2 === 0){
            newNumber = currentNumber + i;
            list.push(newNumber);
        } else {
            newNumber = currentNumber - i;
            list.push(newNumber);
        }
        sum += currentNumber;
        newSum += newNumber;
    }

    console.log(list);
    console.log(sum);
    console.log(newSum);
}

//addAndSubstract([5, 15, 23, 56, 35])
addAndSubstract([-5, 11, 3, 0, 2])