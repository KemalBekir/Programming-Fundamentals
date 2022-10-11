function solve(input) {
    let collection = {};

    let n = Number(input.shift());

    for (let i = 0; i < n; i++) {
        let [car, mileage, fuel] = input.shift().split('|');
        collection[car] = {
            mileage: Number(mileage),
            fuel: Number(fuel)
        };
    }

    while (input[0] != 'Stop') {
        let tokens = input.shift().split(' : ');
        let command = tokens[0];
        let car = tokens[1];
        if (command == 'Drive') {
            if (collection[car] != undefined) {
                let distance = Number(tokens[2]);
                let tripFuel = Number(tokens[3]);
                if (collection[car].fuel >= tripFuel) {
                    collection[car].mileage += distance;
                    collection[car].fuel -= tripFuel;
                    console.log(`${car} driven for ${distance} kilometers. ${tripFuel} liters of fuel consumed.`);
                } else {
                    console.log(`Not enough fuel to make that ride`);
                }
            }

            if(collection[car].mileage >= 100000){
                delete collection[car];
                console.log(`Time to sell the ${car}!`);
            }

        } else if(command == 'Refuel'){
            if(collection[car] != undefined){
                let reFuel = Number(tokens[2]);
                if(collection[car].fuel + reFuel > 75){
                    console.log(`${car} refueled with ${75 - collection[car].fuel} liters`);
                    collection[car].fuel = 75;
                } else {
                    collection[car].fuel += reFuel;
                    console.log(`${car} refueled with ${reFuel} liters`);
                }
            }
        } else if(command == 'Revert'){
            if(collection[car] != undefined){
                let km = Number(tokens[2]);
                collection[car].mileage -= km;
                if(collection[car].mileage < 10000){
                    collection[car].mileage = 10000;
                } else {
                    console.log(`${car} mileage decreased by ${km} kilometers`);
                }
            }
        }
    }

    let sorted = Object.entries(collection).sort((a,b) => {

        let mileageA = a[1].mileage;
        let mileageB = b[1].mileage;

        let nameA = a[0];
        let nameB = b[0];

        return (mileageB - mileageA) || (nameA.localeCompare(nameB))
    });

    for(let [car,params] of sorted){
        console.log(`${car} -> Mileage: ${params.mileage} kms, Fuel in the tank: ${params.fuel} lt.`);
    }
}

solve([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
])

console.log('-------------------');
solve([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
])