function counterStrike(input) {
    let energy = Number(input.shift());
    let won = 0;

    for (let command of input) {
        let currentDistance = Number(command);

        if (command !== "End of battle") {
           
            if (energy - currentDistance < 0) {
                console.log(`Not enough energy! Game ends with ${won} won battles and ${energy} energy`);
                return;
            }
             energy -= currentDistance;
             won++;
        } else {
            console.log(`Won battles: ${won}. Energy left: ${energy}`);
        }
        if(won % 3 === 0){
            energy += won;
        }
    }
}

counterStrike(["100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"])
counterStrike(["200",
    "54",
    "14",
    "28",
    "13",
    "End of battle"])