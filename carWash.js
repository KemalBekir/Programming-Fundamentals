function carWash(array){
    let result = 0;

    for(let i = 0; i < array.length; i++){
        let current = array[i];

        if(current === "soap"){
            result += 10;
        } else if (current === "water"){
            result *= 1.2;
        } else if (current === "vacuum cleaner"){
            result *= 1.25;
        } else if (current === "mud"){
            result *= 0.90;
        }
    }
    console.log(`The car is ${result.toFixed(2)}% clean.`);
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])