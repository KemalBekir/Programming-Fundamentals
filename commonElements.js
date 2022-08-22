function commonElements(first,second){
    for(let i = 0; i < first.length; i++){
        let current = first[i];
        for(let j = 0; j < second.length; j++){
            if(current === second[j]){
                console.log(current);
            }
        }
    }
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']
)
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l'])