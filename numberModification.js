function numberModification(input){
    
    function getSum(input){
        let numAsString = input.toString();
        let sum = 0;

        for(let i = 0; i < numAsString.length; i++){
            sum += Number(numAsString[i]);
        }

        return sum;
    }

    function getAverage(input){
        return getSum(input) / input.toString().length;
    }

    while(getAverage(input) < 5){
        input += "9";
    }

    console.log(input);
}

numberModification(101)
numberModification(5835)