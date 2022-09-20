function wordsTracker(input) {
    let wordsToSearch = input.shift().split(' ');

    let dictionary = {};

    for(let word of wordsToSearch){
        dictionary[word] = 0;
    }

    for(let word of input){
        if(Object.keys(dictionary).includes(word)){
            dictionary[word] += 1;
        }
    }
    let sortedWords = Object.entries(dictionary).sort((a,b) => b[1] - a[1]);
    
    for(let [key,value] of sortedWords){
        console.log(`${key} - ${value}`);
    }
}

wordsTracker([
    'this sentence',
     'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
])