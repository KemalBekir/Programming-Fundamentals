function oddAndEvenSum(num){
    let list = num.toString();
    let odd = 0;
    let even = 0;

    for(let i = 0; i < list.length; i++){
        let currentNum = Number(list[i]);
        if(currentNum % 2 === 0){
            even += currentNum;
        } else {
            odd += currentNum;
        }
    }

    console.log(`Odd sum = ${odd}, Even sum = ${even}`);
}

oddAndEvenSum(1000435)
oddAndEvenSum(3495892137259234)