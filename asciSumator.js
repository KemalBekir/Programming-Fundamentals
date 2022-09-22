function asciSumator(input) {
    let first = input[0].charCodeAt();
    let second = input[1].charCodeAt();
    let str = input[2];
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        let current = str.charCodeAt(i);
        if (first > second) {
            if (current > second && current < first) {
                sum += current;
            }
        } else {
            if (current > first && current < second) {
                sum += current;
            }
        }

    }
    console.log(sum);
}

asciSumator(['.', '@', 'dsg12gr5653feee5'])
asciSumator(['?', 'E', '@ABCEF'])
asciSumator(['a', '1', 'jfe392$#@j24ui9ne#@$'])