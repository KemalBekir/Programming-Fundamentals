function computerStore(input) {
    let totalPrice = 0;
    let taxes = 0;

    for (let i = 0; i < input.length; i++) {
        let current = Number(input[i]);
        if (input[i] === "regular") {

            if (totalPrice == 0) {
                console.log(`Invalid order!`);
                break;
            }

            if (totalPrice > 0) {
                taxes = totalPrice * 0.2;
                console.log(`Congratulations you've just bought a new computer!`);
                console.log(`Price without taxes: ${totalPrice.toFixed(2)}$`);
                console.log(`Taxes: ${taxes.toFixed(2)}$`);
                console.log(`-----------`);
                console.log(`Total price: ${(totalPrice + taxes).toFixed(2)}$`);
            }
        } else if (input[i] == "special") {

            if (totalPrice == 0) {
                console.log(`Invalid order!`);
            }

            if (totalPrice > 0) {
                taxes = totalPrice * 0.2;
                console.log(`Congratulations you've just bought a new computer!`);
                console.log(`Price without taxes: ${totalPrice.toFixed(2)}$`);
                console.log(`Taxes: ${taxes.toFixed(2)}$`);
                console.log(`-----------`);
                console.log(`Total price: ${((totalPrice + taxes) * 0.9).toFixed(2)}$`);
            }
        }

        if(current < 0){
            console.log(`Invalid price!`);
        } else if(current > 0){
            totalPrice += current;
        }

    }
}





computerStore([
    '1050', 
    '200', 
    '450',
    '2', 
    '18.50', 
    '16.86', 
    'special'
    ])
computerStore([
    '1023',
    '15',
    '-20',
    '-5.50',
    '450',
    '20',
    '17.66',
    '19.30', 'regular'
])
computerStore([
    'regular'
])
