function solve(input) {
    let result = [];
    let mirrorCount = 0;
    let found = 0;
    let pattern = /(\@|\#)([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/gm;
            //    /(@|#)([A-Za-z]{3,})\1(@|#)([A-Za-z]{3,})\1/gm;
            //    /(\@|\#)([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/gm;


    let match = pattern.exec(input);
    
    while (match != null) {
        let first = match[2];
        let second = match[3];
        let reversed = second.split('').reverse().join('');
        if (first === reversed) {
            mirrorCount++;
            result.push(`${first} <=> ${second}`);
        }

        match = pattern.exec(input);
        found++;
    }

    if (found > 0) {
        console.log(`${found} word pairs found!`);
    } else {
        console.log(`No word pairs found!`);
    }
    if (mirrorCount > 0) {
        console.log(`The mirror words are:`);
        console.log(result.join(', '));
    } else {
        console.log(`No mirror words!`);
    }
    
}

solve([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
])
console.log('------');
solve(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@'])
console.log('------');

solve(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#'])

/*
function solve(input){
    let text = input[0];
    let reg= /(\@|\#)([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/gm
    let matches = [...text.matchAll(reg)]
    let mirrorWords=[]
   
    for (const match of matches) {
        let firstWord = match[2]
        let secondWord = match[3]
        let reverseWord = secondWord.split('').reverse().join('')
        if(firstWord===reverseWord){
            mirrorWords.push(firstWord + " <=> " + secondWord)
        }
       
    }
    if(matches.length===0){
        console.log('No word pairs found!')
        console.log('No mirror words!')
    }else{
        console.log(`${matches.length} word pairs found!`)
        if(mirrorWords.length===0){
            console.log('No mirror words!')
        }else{
            console.log('The mirror words are:')
            console.log(mirrorWords.join(', '))
        }
    }
}
*/
