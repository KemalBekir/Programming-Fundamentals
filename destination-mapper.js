function solve(input){
    let pattern = /(=|\/)([A-Z][A-Za-z]{2,})\1/g;

    let match = pattern.exec(input);
    let result = [];
    let points = 0;

    while(match != null){
        result.push(match[2]);
        points += match[2].length;
        match = pattern.exec(input);
    }

    console.log('Destinations: ' + result.join(', '));
    console.log('Travel Points: ' + points);
}

solve("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")
solve("ThisIs some InvalidInput")