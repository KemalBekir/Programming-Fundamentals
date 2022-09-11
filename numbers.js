function numbers(input) {
    let list = input.split(' ').map(Number);
    let maxNums = [];
    let number = list.length;
    let avg = 0;
    let sum = 0;
    let isMax = false;
    for (let i = 0; i < list.length; i++) {
        sum += list[i];
    }
    avg = sum / list.length;
    for (let i = 0; i < number; i++) {
        let currentNumber = list[i];
        if (currentNumber > avg) {
            if (Math.max(currentNumber)) {
                maxNums.push(currentNumber);
                isMax = true;
            }
        }

    }
    let sorted = maxNums.sort((a, b) => b - a);
    if (maxNums.length > 5) {
        maxNums.length = 5;
    }
    if (isMax) {
        console.log(maxNums.join(' '));
    } else {
        console.log(`No`);
    }
}

numbers('10 20 30 40 50') // 40, 50
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51') //Output 60 60 51 50 50 // 30, 40, 50, 50, 60, 60, 51
numbers('1') // Output No
numbers('-1 -2 -3 -4 -5 -6') //Output -1 -2 -3 //-1, -2, -3