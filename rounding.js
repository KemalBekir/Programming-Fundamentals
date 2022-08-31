function rounding(number, roundTo){

    if(roundTo > 15){
        roundTo = 15;
    }
    
    const roundedNum = number.toFixed(roundTo);
    const noZeros = parseFloat(roundedNum);
    console.log(noZeros);
}

rounding(3.1415926535897932384626433832795,2)
rounding(10.5,3)
