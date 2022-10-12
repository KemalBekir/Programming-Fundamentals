function solve(input){
    let result = input.shift();

    while(input[0] != 'Reveal'){
        let tokens = input.shift().split(':|:');
        let command = tokens[0];

        if(command == 'ChangeAll'){
            if(result.includes(tokens[1])){
                result = result.split(tokens[1]).join(tokens[2]);
                console.log(result);
            }
        } else if(command == 'Reverse'){
            if(result.includes(tokens[1])){
                let index = result.indexOf(tokens[1]);
                let cut = result
                .substring(index, index + tokens[1].length)
                .split('')
                .reverse()
                .join('');
                let left = result.substring(0, index);
                let right = result.substring(index + tokens[1].length);
                result = left + right + cut;
                console.log(result);   
            } else {
                console.log('error');
            }
        } else if(command == 'InsertSpace'){
            tokens[1] = Number(tokens[1]);
            let left = result.substring(0, tokens[1]);
            let right = result.substring(tokens[1]);

            result = left + ' ' + right;
            console.log(result);

        }
        
    }
    console.log('You have a new text message: ' + result);
}

solve([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
  ])
solve([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ]
  )