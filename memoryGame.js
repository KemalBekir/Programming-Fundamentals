function memoryGame(input) {
    let list = input.shift().split(' ');
    let moves = 0;
    let size = input.length;

    for (let i = 0; i < size; i++) {
        let [index1, index2] = input[i].split(' ').map(Number);
        let action = input[i].toLowerCase();
        let removeFromIndex = [index1,index2];
        if (index1 < 0 || index2 < 0 || index1 === index2 || index1 >= list.length || index2 >= list.length) {
            moves++;
            let middle = Math.ceil(list.length / 2);
            let newElements = `-${moves}a`
            list.splice(middle, 0, newElements, newElements);
            console.log(`Invalid input! Adding additional elements to the board`);
        } else {
            if (action == "end") {
                console.log(`Sorry you lose :(`);
                console.log(list.join(' '));
                break;
            } else if (list[index1] == list[index2] && list.length != 0) {
                moves++;
                console.log(`Congrats! You have found matching elements - ${list[index1]}!`);
                if(index1 > index2){
                    list.splice(index1, 1);
                    list.splice(index2, 1);
                } else {
                    list.splice(index2, 1);
                    list.splice(index1, 1);
                }
            } else if (list[index1] != list[index2]) {
                console.log(`Try again!`);
            } else if (list.length == 0) {
                console.log(`You have won in ${moves} turns!`);
                break;
            }
        }
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