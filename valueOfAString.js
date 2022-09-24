function valueOfAString(input){
    let text = input[0];
    let command = input[1];
    let sum = 0;

    for(let char of text){
        let code = char.charCodeAt();
        if(command === 'LOWERCASE'){
            if(code >= 97 && code <= 122){
                sum += code;
            }
        } else {
            if(code >= 65 && code <= 90){
                sum += code;
            }
        }
    }
    console.log(`The total sum is: ${sum}`);
}

valueOfAString([ 'HelloFromMyAwesomePROGRAM', 'LOWERCASE', '' ])
valueOfAString([ 'AC/DC', 'UPPERCASE', '' ])