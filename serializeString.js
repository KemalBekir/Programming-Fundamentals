function serializeString(input) {
    let result = '';
    let text = input.shift().split('');
    let count = 0;
    let unique = text.filter((item, i ,ar) => ar.indexOf(item) === i);

    for (let i = 0; i < unique.length; i++) {
        let char = unique[i];
        //result += i;
        for (let j = 0; j < text.length; j++) {
            if (char == text[j]) {
                result += `${j}/`;
            }
        }
        console.log(`${char}:${result.substring(0, result.length -1)}`);
        result = '';

    }
}

//serializeString([ 'abababa', '' ])
serializeString([ 'avjavamsdmcalsdm', '' ])