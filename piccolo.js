function piccolo(input) {
    let parked = [];

    for(let car of input){
        let [command, licence] = car.split(', ');
        
        if(command === "IN"){
            if(!parked.includes(licence)){
                parked.push(licence)
            }
        } else {
            if(parked.includes(licence)){
                parked.splice(parked.indexOf(licence),1);
            }
        }
    }
    let sorted = parked.sort((a,b) => a.localeCompare(b));
    
    if(parked.length > 0){
        for(let car of sorted){
            console.log(car);
        }
    } else {
        console.log("Parking Lot is Empty");
    }

}

piccolo([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
])
piccolo([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA'
])