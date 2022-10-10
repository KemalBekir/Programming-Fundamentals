function solve(input) {
    let heroes = {};

    let n = Number(input.shift());

    for (let i = 0; i < n; i++) {
        let [name, health, mana] = input.shift().split(' ');
        heroes[name] = {
            health: Number(health),
            mana: Number(mana)
        };
        // if(health >= 100){
        //     heroes[name].health = 100;
        // } else if(mana >= 200){
        //     heroes[name].mana = 200;
        // }
    }

    while (input[0] != 'End') {
        let tokens = input.shift().split(' - ');
        let command = tokens[0];
        let name = tokens[1];

        if (command == 'CastSpell') {
            if (heroes[name] != undefined) {
                let neededMana = Number(tokens[2]);
                let spellName = tokens[3];
                if (heroes[name].mana >= neededMana) {
                    console.log(`${name} has successfully cast ${spellName} and now has ${heroes[name].mana - neededMana} MP!`);
                    heroes[name].mana -= neededMana;
                } else {
                    console.log(`${name} does not have enough MP to cast ${spellName}!`);
                }
            }

        } else if (command == 'TakeDamage') {
            if (heroes[name] != undefined) {
                let damage = Number(tokens[2]);
                let attacker = tokens[3];
                if (damage >= heroes[name].health) {
                    delete heroes[name];
                    console.log(`${name} has been killed by ${attacker}!`);
                } else {
                    console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${heroes[name].health - damage} HP left!`);
                    heroes[name].health -= damage;
                }
            }
        } else if (command == 'Recharge') {
            if (heroes[name] != undefined) {
                let manaPotion = Number(tokens[2]);
                if (heroes[name].mana + manaPotion > 200) {
                    console.log(`${name} recharged for ${200 - heroes[name].mana} MP!`);
                    heroes[name].mana = 200;
                } else {
                    console.log(`${name} recharged for ${manaPotion} MP!`);
                    heroes[name].mana += manaPotion;
                }
            }
        } else if (command == 'Heal') {
            if (heroes[name] != undefined) {
                let healthPotion = Number(tokens[2]);
                if (heroes[name].health + healthPotion > 100) {
                    console.log(`${name} healed for ${100 - heroes[name].health} HP!`);
                    heroes[name].health = 100;
                } else {
                    console.log(`${name} healed for ${healthPotion} HP!`);
                    heroes[name].health += healthPotion;
                }
            }
        }
    }

    let sorted = Object.entries(heroes).sort((a, b) => {
        let healthA = a[1].health;
        let healthB = b[1].health;

        let nameA = a[0];
        let nameB = b[0];

        return (healthB - healthA) || (nameA.localeCompare(nameB));
    });

    for (let [name, params] of sorted) {
        console.log(`${name}\n  HP: ${params.health}\n  MP: ${params.mana}`);
    }
}

solve(["2",
    "Solmyr 85 120",
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End"])
console.log('-------------------------');
// solve(["4",
//     "Adela 90 150",
//     "SirMullich 70 40",
//     "Ivor 1 111",
//     "Tyris 94 61",
//     "Heal - SirMullich - 50",
//     "Recharge - Adela - 100",
//     "CastSpell - Tyris - 1000 - Fireball",
//     "TakeDamage - Tyris - 99 - Fireball",
//     "TakeDamage - Ivor - 3 - Mosquito",
//     "End"])