function movingTarget(input) {
    let target = input.shift();
    target = target.split(' ').map(Number);

    for (let command of input) {
        let [action, index, power] = command.split(' ');
        index = Number(index);
        power = Number(power);

        if (action === "End") {
            console.log(target.join('|'));
        } else if (action === "Shoot") {
            if (index >= 0 && index < target.length) {
                //◦ Shoot the target at the index, if it exists by reducing its value by the given power (integer value).A target is considered shot when its value reaches 0.
                //◦ Remove the target, if it is shot.
                target[index] -= power;
                if (target[index] <= 0) {
                    target.splice(index, 1);
                }
            }
        } else if (action === "Add") {
            //Add
            //Insert a target with the received value at the received index, 
            //if it exist. If not, print: "Invalid placement!"
            if (index < target.length && index >= 0) {
                target.splice(index, 0, power);
            } else {
                console.log(`Invalid placement!`);
            }
        } else if (action === "Strike" && index >= 0 && index < target.length) {
            //◦ Remove the target at the given index and the ones before and after it 
            //depending on the radius, if such exist. If any of the indices in the range is invalid print:
            //"Strike missed!" and skip this command.
            if ((index - power) >= 0 && (index + power) < target.length) {
                target.splice(index - power, power + power + 1);
            } else {
                console.log(`Strike missed!`);
            }

        }
    }

}

movingTarget([
    "52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"])
movingTarget([
    "1 2 3 4 5",
    "Strike 0 1",
    "End"])