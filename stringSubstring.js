function stringSubstring(word,text){
    let result = '';
    text = text.split(' ');
    let found = false
    for(let wrd of text){
        let current = wrd.toLowerCase();

        if(current == word){
            result = word;
            console.log(result);
            found = true;
            break;
        } 
    }

    if(!found){
        console.log(`${word} not found!`);
    }
}

stringSubstring('javascript',
'JavaScript is the best programming language')
stringSubstring('python',
'JavaScript is the best programming language')