function perfectNumber(input){
    let sum = 0;

    for(let i = 0; i < input; i++){
        if(input % i === 0){
            sum += i;
        }
    }

    if(sum === input){
        console.log(`We have a perfect number!`);
    } else {
        console.log(`It's not so perfect.`);
    }
}

perfectNumber(6)
perfectNumber(28)
perfectNumber(1236498)