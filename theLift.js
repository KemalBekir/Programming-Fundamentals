function theLift(input) {
    let numPpl = Number(input.shift());
    let lift = input.shift().split(' ').map(Number);
    let freeSpace = 0;
    let count = 0;

    for (let i = 0; i < lift.length; i++) {
        let currentNum = lift[i];
        if (currentNum < 4) {
            if(numPpl >= 4){
                
                if (currentNum != 0) {
                    freeSpace = 4 - currentNum;
                    currentNum = 4;
                    lift[i] = currentNum;
                    numPpl -= freeSpace;
                } else {
                    currentNum = 4;
                    numPpl -= currentNum;
                    lift[i] = currentNum
                }
            } else {
                currentNum += numPpl;
                numPpl = 0;
                lift[i] = currentNum;
            }
        }
    }


    if (numPpl != 0) {
        console.log(`There isn't enough space! ${numPpl} people in a queue!`);
        console.log(`${lift.join(' ')}`);
    } else {
        for (let i = 0; i < lift.length; i++) {
            let currentNum = lift[i];
            if (currentNum === 4) {
                count++;
            }
        }
        if (count != lift.length) {
            console.log(`The lift has empty spots!`);
            console.log(`${lift.join(' ')}`);
        } else {
            console.log(`${lift.join(' ')}`);
        }
    }

}

theLift([
    "15",
    "0 0 0 0 0"
])
theLift([
    "20",
    "0 2 0"
])
theLift([
    "10",
    "0 2 0"
])
