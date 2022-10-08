function solve(input) {
    let actKey = input.shift();
    let result = '';

    while(input[0] != 'Generate'){
        let tokens = input.shift().split('>>>');
        let command = tokens[0];
        if(command == 'Contains'){
            let str = tokens[1];
            if(actKey.includes(str)){
                console.log(`${actKey} contains ${str}`);
            } else {
                console.log('Substring not found!');
            }
        } else if (command == 'Flip'){
            let nextCommand = tokens[1]; 
            let start = Number(tokens[2]);
            let end = Number(tokens[3]);
            if(nextCommand == 'Upper'){
                let left = actKey.substring(0, start);
                let middle = actKey.substring(start, end);
                let right = actKey.substring(end);
                middle = middle.toUpperCase();
                actKey = left + middle + right;
                console.log(actKey);
            } else if(nextCommand == 'Lower'){
                let left = actKey.substring(0, start);
                let middle = actKey.substring(start, end);
                let right = actKey.substring(end);
                middle = middle.toLowerCase();
                actKey = left + middle + right;
                console.log(actKey);
            }
        } else if (command == 'Slice'){
            let startIndex = Number(tokens[1]);
            let endIndex = Number(tokens[2]);
            let left = actKey.substring(0, startIndex);
            let right = actKey.substring(endIndex);

            actKey = left + right;
            console.log(actKey);
        }
    }
    console.log(`Your activation key is: ${actKey}`);
}

solve([
    "abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"
])
console.log('-------');
solve([
    "134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"
])