function solve(input) {
    let name = input.shift().split(', ');
    let result = [];
    while (input[0] != 'Eat') {
        let tokens = input.shift().split(' ');
        let command = tokens[0];
        if (command == 'Update-Any') {
            let cookie = tokens[1];
            if (name.includes(cookie)) {
                for(let item of name){
                    if(item == cookie){
                        let index = name.indexOf(item);
                        name[index] = 'Out of Stock';
                    }
                }
            }
        } else if (command == 'Replace') {
            let cookie = tokens[1];
            let index = Number(tokens[2]);
            if (index >= 0 && index < name.length) {
                name.splice(index, 1, cookie);
            }
        } else if (command == 'Update-Last') {
            let cookie = tokens[1];
            let index = name.length -1;
            name.splice(index, 1, cookie);
        } else if (command == 'Rearrange') {
            let cookie = tokens[1];
            if (name.includes(cookie)) {
                let index = name.indexOf(cookie);
                let word = name.splice(index,1);
                name.push(word);
            }
        }
    }

    for(let word of name){
        if(word != 'Out of Stock'){
            result.push(word);
        }
    }
    console.log(result.join(' '));
}

solve(["Vanilla, Chocolate, Raspberry, Strawberry, Walnuts, WhiteChocolate, Ordinary, Vegan",
    "Update-Any Chocolate",
    "Replace BBB 3",
    "Update-Last Healthy",
    "Eat"])
solve(["Vanilla, Chocolate, Raspberry, Strawberry, Walnuts, WhiteChocolate, Ordinary, Vegan",
    "Update-Any Chocolate",
    "Replace BBB 3",
    "Rearrange Walnuts",
    "Eat"])