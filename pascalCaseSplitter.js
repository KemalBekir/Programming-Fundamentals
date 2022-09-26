function pascalCaseSplitter(input){
    let result = [];
    let currentWord = '';

    let lower = input.toLocaleLowerCase();

    for(let i = 0; i < input.length; i++){  
        if(input[i] != lower[i]){
            if(currentWord.length > 0){
                result.push(currentWord);
            }
            currentWord = input[i];
        } else {
            currentWord += input[i];
        }
    }
    if(currentWord.length > 0){
        result.push(currentWord);
    }

    console.log(result.join(', '));
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')
pascalCaseSplitter('HoldTheDoor')
pascalCaseSplitter('ThisIsSoAnnoyingToDo')