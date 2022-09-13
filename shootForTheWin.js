function shootForTheWin(input) {
    let target = input.shift();
    target = target.split(' ').map(Number);
    let shot = 0;
    
    for (let command of input) {
        let indexTarget = Number(command);
        shot = target[indexTarget];
        if(target[indexTarget] !== -1 && target.length > indexTarget){
            //Every time you receive an index, you need to shoot the target on that index,
            // if it is possiblie. 
            target[indexTarget] = -1;
            for(let i = 0; i < target.length; i++){
                if(target[i] !== -1 && i != indexTarget){
                    //Everytime you shoot a target, its value becomes -1 and it is considered shot.
                    // Along with that you also need to:
                    //Reduce all the other targets, which have greater values than your current target,
                    // with its value. 
                    if(shot < target[i]){
                        target[i] -= shot;
                    } else if (shot >= target[i]){
                        //All the targets, which have less than or equal value to the shot target, 
                        //you need to increase with its value.
                        target[i] += shot;
                    }
                }
            }
        }
        //When you receive the "End" command, print the targets in their
        // current state and the count of shot targets in the following format:
        //"Shot targets: {count} -> {target1} {target2}… {targetn}"
    }
    let deadTargets = target.filter(x => x < 0).length;
    console.log(`Shot targets: ${deadTargets} -> ${target.join(' ')}`);
}

shootForTheWin(["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"])
shootForTheWin(["30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"])