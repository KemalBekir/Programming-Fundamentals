function solve(input) {
    let collection = {};
    let text = input.shift().split(' | ');
    let teacherWord = input.shift().split(' | ');
    let command = input.shift();

    for (let line of text) {
        let [word, description] = line.split(': ');
        if (!collection.hasOwnProperty(word)) {
            collection[word] = [];
        }
        //add multiple discriptions to same
        let existing = collection[word];
        existing.push(description);


    }


    if (command == 'Test') {
        for (let list of teacherWord) {
            if (collection.hasOwnProperty(list)) {
                let sorted = Object.entries(collection).sort((a, b) => {
                    if (a[1].length > 1) {
                        a[1].sort((x, y) => {
                            return y.length - x.length;
                        })
                    }
                });
                for (let [word, desc] of sorted) {
                    if (list == word) {
                        console.log(`${word}:  \n -${desc.join('\n -')}`);
                    }
                }
            }
        }
    }

    if (command == 'Hand Over') {
        let result = [];
        let sorted = Object.entries(collection).sort((a, b) => {
            return a[0].localeCompare(b[0]);
        });

        for (let [word, desc] of sorted) {
            result.push(word);
        }
        console.log(result.join(' '));
    }
}
solve(["programmer: an animal, which turns coffee into code | developer: a magician",
    "fish | domino",
    "Hand Over"])
console.log('------------------');
solve(["care: worry, anxiety, or concern | care: a state of mind in which one is troubled | face: the front part of the head, from the forehead to the chin",
    "care | kitchen | flower",
    "Test"])
console.log('---------------------');
solve(["tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance",
    "bit | code | tackle",
    "Test"])
