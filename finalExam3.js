function solve(input){
    let distributor = {};
    let client = {};
    let total = 0;

    while(input[0] != 'End'){
        let tokens = input.shift().split(' ');
        let command = tokens[0];

        if(command == 'Deliver'){
            let name = tokens[1];
            let money = Number(tokens[2]);
            if(distributor.hasOwnProperty(name)){
                distributor[name].money += money;
            } else {
                distributor[name] = {
                    money: money
                }
            }
        } else if (command == 'Return'){
            let name = tokens[1];
            let money = Number(tokens[2]);
            if(distributor[name] != undefined){
                if(distributor[name].money - money <= 0){
                    delete distributor[name];
                } else {
                    distributor[name].money -= money;
                    if(distributor[name].money == 0){
                        delete distributor[name];
                    }
                }
            }
        } else if (command == 'Sell'){
            let name = tokens[1];
            let spend = Number(tokens[2]);
            if(client.hasOwnProperty(name)){
                client[name].spend += spend;
                total += spend;
            } else {
                total += spend;
                client[name] = {
                    spend: spend
                }
            }
        }
    }

    let clientsSorted = Object.entries(client).sort((a,b) => {
        let nameA = a[0];
        let nameB = b[0];

        return nameA.localeCompare(nameB);
    });

    for(let [name, params] of clientsSorted){
        console.log(`${name}: ${params.spend.toFixed(2)}`);
    }
    console.log('-----------');
    let distSorted = Object.entries(distributor).sort((a,b) => {
        let nameA = a[0];
        let nameB = b[0];
        return nameA.localeCompare(nameB);
    });

    for(let [name,params] of distSorted){
        console.log(`${name}: ${params.money.toFixed(2)}`);
    }
    console.log('-----------');
    console.log(`Total Income: ${total.toFixed(2)}`);

}

solve(['Deliver Micro 10000.00',
'Sell Nick 500.00',
'Sell Antony 260.50',
'Deliver Micro 2000.50',
'End'])
console.log('-----------------');
solve(['Deliver North 200.30',
'Sell Peter 30.20',
'Return Macro 5000.00',
'Return North 100.30',
'Sell Peter 50.50',
'End'])