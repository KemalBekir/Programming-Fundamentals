function solve(input){
    let n = Number(input.shift());
    let pattern = /\|(?<boss>[A-Z]{4,})\|:#(?<title>[A-z]+ [A-z]+)#/;
    let bossPattern = /\|(?<boss>[A-Z]{4,})\|/;

    for(let line of input){
        let match = pattern.exec(line);

        if(match != null){
            let name = match.groups.boss;
            let title = match.groups.title;
            console.log(`${name}, The ${title}`);
            console.log(`>> Strength: ${name.length}`);
            console.log(`>> Armour: ${title.length}`);
        } else {
            console.log(`Access denied!`);
        }
    }

}

solve(["3",
"|GEORGI|:#Lead architect#",
"|Hristo|:#High Overseer#",
"|STEFAN|:#Assistant Game Developer#"])
console.log('<------------->');
solve(["3",
"|PETER|:#H1gh Overseer#",
"|IVAN|:#Master detective#",
"|KARL|: #Marketing lead#"])