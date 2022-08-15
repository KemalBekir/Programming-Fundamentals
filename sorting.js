function sorting(num) {
    let newArr = [];
    let numLength = num.length

    for (let i = 0; i < numLength; i++) {
        let number;
        if (i % 2 === 0) {
            number = Math.max(...num);
        } else {
            number = Math.min(...num);
        }
        newArr.push(number);
        num.splice(num.indexOf(number),1);
    }

    console.log(newArr.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])