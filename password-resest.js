function solve(input) {
    let pass = input.shift();
    let result = '';

    while (input[0] != 'Done') {
        let tokens = input.shift().split(' ');
        let command = tokens[0];

        if (command == 'TakeOdd') {
            for (let i = 1; i < pass.length; i += 2) {
                result += pass[i];
            }
            console.log(result);
        } else if (command == 'Cut') {
            let index = Number(tokens[1]);
            let count = Number(tokens[2]);
            let word = result.substring(index, index + count);

            result = result.replace(word, '');
            console.log(result);
        } else if (command == 'Substitute') {
            let target = tokens[1];
            let repl = tokens[2];
            if (result.includes(target)) {
                result = result.split(target).join(repl);
                console.log(result);
            } else {
                console.log('Nothing to replace!');
            }
        }
    }

    console.log('Your password is: ' + result);
}

solve([
    "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"
])

console.log('----------------------------------');

solve(
    ["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
        "TakeOdd",
        "Cut 18 2",
        "Substitute ! ***",
        "Substitute ? .!.",
        "Done"
    ])