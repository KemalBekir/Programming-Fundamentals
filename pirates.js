function solve(input) {
    let collection = {};

    while (input[0] != 'Sail') {
        let [name, population, gold] = input.shift().split('||');
        if (collection.hasOwnProperty(name)) {
            collection[name].population += Number(population);
            collection[name].gold += Number(gold);
        } else {
            collection[name] = {
                population: Number(population),
                gold: Number(gold)
            };
        }
    }
    let removeSail = input.shift();

    while (input[0] != 'End') {
        let tokens = input.shift().split('=>');
        let command = tokens[0];
        let name = tokens[1];
        if (command == 'Plunder') {
            if (collection[name] != undefined) {
                let people = Number(tokens[2]);
                let gold = Number(tokens[3]);
                if (((collection[name].population - people) <= 0) || ((collection[name].gold - gold) <= 0)) {
                    delete collection[name];
                    console.log(`${name} plundered! ${gold} gold stolen, ${people} citizens killed.`);
                    console.log(`${name} has been wiped off the map!`);
                } else {
                    collection[name].population -= people;
                    collection[name].gold -= gold;
                    console.log(`${name} plundered! ${gold} gold stolen, ${people} citizens killed.`);
                }
            }
        } else if (command == 'Prosper') {
            if (collection[name] != undefined) {
                let gold = Number(tokens[2]);
                if (gold > 0) {
                    console.log(`${gold} gold added to the city treasury. ${name} now has ${collection[name].gold + gold} gold.`);
                    collection[name].gold += gold;
                } else {
                    console.log(`Gold added cannot be a negative number!`);
                }
            }
        }
    }
    let sorted = Object.entries(collection).sort((a, b) => {
        let tresureA = a[1].gold;
        let tresureB = b[1].gold;

        let nameA = a[0];
        let nameB = b[0];
        return (tresureB - tresureA) || (nameA.localeCompare(nameB))
    });

    if (sorted.length == 0) {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    } else {
        console.log(`Ahoy, Captain! There are ${sorted.length} wealthy settlements to go to:`);
        for (let [name, params] of sorted) {
            console.log(`${name} -> Population: ${params.population} citizens, Gold: ${params.gold} kg`);
        }
    }
}

solve([
    "Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"
])
console.log('------------------------------------');
solve([
    "Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"
])