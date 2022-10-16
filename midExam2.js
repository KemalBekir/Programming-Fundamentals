function solve(input){
    let listOfCards = input.shift().split(', ');
    let n = Number(input.shift());
    for(let i = 0; i < n; i++){
        let tokens = input.shift().split(', ');
        let command = tokens[0];
        if(command == 'Add'){
            let cardName = tokens[1];
            if(listOfCards.includes(cardName)){
                console.log(`Card is already in the deck`);
            } else {
                listOfCards.push(cardName);
                console.log(`Card successfully added`);
            }
        } else if (command == 'Remove'){
            let cardName = tokens[1];
            if(listOfCards.includes(cardName)){
                listOfCards.splice(listOfCards.indexOf(cardName),1);
                console.log(`Card successfully removed`);
            } else {
                console.log(`Card not found`);
            }
        } else if (command == 'Remove At'){
            let index = Number(tokens[1]);
            if(index < 0 || index > listOfCards.length){
                console.log(`Index out of range`);
            } else {
                listOfCards.splice(index,1);
                console.log(`Card successfully removed`);
            }
        } else if (command == 'Insert'){
            let index = Number(tokens[1]);
            let cardName = tokens[2];
            if(index < 0 || index > listOfCards.length){
                console.log(`Index out of range`);
            } else {
                if(listOfCards.includes(cardName)){
                    console.log(`Card is already added`);
                } else {
                    listOfCards.splice(index,0,cardName);
                    console.log(`Card successfully added`);
                }
            }
        }
    }
    console.log(listOfCards.join(', '));
}

solve(["Ace of Diamonds, Queen of Hearts, King of Clubs",
"3",
"Add, King of Diamonds",
"Insert, 2, Jack of Spades",
"Remove, Ace of Diamonds"])
console.log('-----');
solve(["Two of Clubs, King of Spades, Five of Spades, Jack of Hearts",
"4",
"Add, Two of Clubs",
"Remove, Five of Hearts",
"Insert, 10, Queen of Spades",
"Remove At, 1"])
