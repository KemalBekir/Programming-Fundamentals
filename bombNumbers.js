function bombNumbers(sequence,bomb){
    let specialNumber = bomb[0];
    let bombPower = bomb[1];
    let sum = 0;

    while(sequence.includes(specialNumber)){
        let index = sequence.indexOf(specialNumber);
        let elementsToDestroy = bombPower * 2 + 1;
        let startIndex = index - bombPower;

        if(startIndex < 0){
            elementsToDestroy+= startIndex;
            startIndex = 0;
        }
        sequence.splice(startIndex, elementsToDestroy);
    }

    for(let i = 0; i < sequence.length; i++){
        let currentNum = sequence[i];
        sum += currentNum;
    }

    console.log(sum);
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],[4, 2])
bombNumbers([1, 4, 4, 2, 8, 9, 1],[9, 3])
bombNumbers([1, 7, 7, 1, 2, 3],[7, 1])
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],[2, 1])