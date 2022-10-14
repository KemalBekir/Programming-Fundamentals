function solve(input) {
    let text = input.shift();
    let result = '';

    while (input[0] != 'Done') {
        let tokens = input.shift().split(' ');
        let command = tokens[0];

        if (command == 'Change') {
            text = text.split(tokens[1]).join(tokens[2]);
            console.log(text);
        } else if (command == 'Includes') {
            if (text.includes(tokens[1])) {
                console.log('True');
            } else {
                console.log('False');
            }
        } else if (command == 'End') {
            if(text.endsWith(tokens[1])){
                console.log('True');
            } else {
                console.log('False');
            }
        } else if (command == 'Uppercase') {
            text = text.toUpperCase();
            console.log(text);
        } else if (command == 'FindIndex') {
            let index = text.indexOf(tokens[1]);
            console.log(index);
        } else if (command == 'Cut') {
            let start = Number(tokens[1]);
            let size = Number(tokens[2]);
            result = text.substring(start, start + size);
            console.log(result);
        }
    }
}

solve(["//Th1s 1s my str1ng!//",
    "Change 1 i",
    "Includes string",
    "End my",
    "Uppercase",
    "FindIndex I",
    "Cut 5 5",
    "Done"])
console.log('----------------------');
solve(["*S0ftUni is the B3St Plac3**",
    "Change 2 o",
    "Includes best",
    "End is",
    "Uppercase",
    "FindIndex P",
    "Cut 3 7",
    "Done"])
