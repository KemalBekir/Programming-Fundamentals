function muOnline(input) {
    let health = 100;
    let bitcoins = 0;
    let dungeons = input.split('|');
    let roomNum = 0;
    let healing = 0;

    for(let room of dungeons){
        let [currentRoom,currentValue] = room.split(' ');
        currentValue  = Number(currentValue);

        if(currentRoom === 'potion'){
            roomNum++;
            if(health < 100){
                healing = health;
                health += currentValue;
                if(health > 100){
                    health = 100;
                    console.log(`You healed for ${health - healing} hp.`);
                    console.log(`Current health: ${health} hp.`);
                    continue;
                }
                console.log(`You healed for ${currentValue} hp.`);
                console.log(`Current health: ${health} hp.`);
            }
            
        } else if(currentRoom === 'chest'){
            roomNum++;
            bitcoins += currentValue;
            console.log(`You found ${currentValue} bitcoins.`);
        } else {
            roomNum++;
            health -= currentValue;
            if(health > 0){
                console.log(`You slayed ${currentRoom}.`);
            } else if (health <= 0){
                console.log(`You died! Killed by ${currentRoom}.`);
                console.log(`Best room: ${roomNum}`);
                break;
            }
        }
    }
  
    if(roomNum == dungeons.length && health > 0){
        console.log(`You've made it!`);
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    }
}

//muOnline('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000')
muOnline('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110')