function problem(input) {
    let list = input.shift().split(', ');
    let size = input.length;
    let numBlacklisted = 0;
    let lostNames = 0;
    let index = 0;

    for (let i = 0; i < size; i++) {
        let [command, argument, newName] = input[i].split(' ');
        if (command !== "Report") {
            if (command == "Blacklist") {
                if (!(list.includes(argument))) {
                    console.log(`${argument} was not found.`);
                } else {
                    index = list.indexOf(argument);
                    let banned = list[index];
                    list[index] = "Blacklisted";
                    console.log(`${banned} was blacklisted.`);
                    numBlacklisted++;
                }
            } else if (command == "Error") {
                argument = Number(argument);
                if ((argument >= 0 && argument < list.length &&
                    list[argument] !== 'Blacklisted' && list[argument] !== 'Lost')) {
                        let lost = list[argument];
                        list[argument] = "Lost";
                        lostNames++; 
                        console.log(`${lost} was lost due to an error.`);
                }
            } else if (command == "Change") {
                argument = Number(argument);
                if (!(argument < 0 && argument >= list.length)) {
                        let oldName = list[index];
                        list[argument] = newName;
                        console.log(`${oldName} changed his username to ${newName}.`);
                }
            }
        } else {
            console.log(`Blacklisted names: ${numBlacklisted}`);
            console.log(`Lost names: ${lostNames}`);
            console.log(list.join(' '));
        }
    }

}
problem(["Mike, John, Eddie",
    "Blacklist Mike",
    "Error 0",
    "Report"])
problem(["Mike, John, Eddie, William",
    "Error 3",
    "Error 4",
    "Change 0 Mike123",
    "Report"])
problem(["Mike, John, Eddie, William",
    "Blacklist Maya",
    "Error 1",
    "Change 4 George",
    "Report"])
