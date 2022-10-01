function countStringOcurrences(string, searchedWord){
    let words = string.split(' ');
    let count = 0;

    for(let i = 0; i < words.length; i++){
        if(words[i] === searchedWord){
            count++;
        }
    }
    console.log(count);
}

countStringOcurrences("This is a word and it also is a sentence",
"is")