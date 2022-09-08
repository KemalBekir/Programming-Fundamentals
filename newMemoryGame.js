function memoryGame(input) {
    let list = input.shift().trim().split(' ');
    let moves = 0;

    while (list.length > 1 && input[0].toLowerCase() !== 'end') {
        let [index1, index2] = input.shift().split(' ');
        index1 = Number(index1);
        index2 = Number(index2);
        moves++

        if (index1 < 0
            || index1 >= list.length
            || index1 === index2
            || index2 < 0
            || index2 >= list.length
        ) {
            let index = Math.trunc(list.length / 2);
            let element = '-' + moves + 'a';
            list.splice(index, 0, element, element);
            console.log('Invalid input! Adding additional elements to the board')
        } else {
            let num1 = list[index1];
            let num2 = list[index2];
            if (num1 === num2) {
                list.splice(index1, 1);
                index2 = list.indexOf(num2);
                list.splice(index2, 1);
                console.log(`Congrats! You have found matching elements - ${num1}!`);
            } else if (num1 !== num2) {
                console.log('Try again!');
            }
        }
    }

    if (list.length === 0 || list.length === 1) {
        console.log(`You have won in ${moves} turns!`);
    } else {
        console.log(`Sorry you lose :(`);
        console.log(`${list.join(' ')}`);
    }

}






memoryGame([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"
])
memoryGame([
    "a 2 4 a 2 4",
    "0 3",
    "0 2",
    "0 1",
    "0 1",
    "end"
])
memoryGame([
    "a 2 4 a 2 4",
    "4 0",
    "0 2",
    "0 1",
    "0 1",
    "end"
])