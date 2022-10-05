function solve(input){
    let validNumbers = [];
    let pattern = /(?<!\d)[+]359([ -])2\1\d{3}\1\d{4}\b/g;

    while((validName = pattern.exec(input)) !== null){
        validNumbers.push(validName[0]);
    }

    console.log(validNumbers.join(', '));
}

solve([
    '+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'
  ])
