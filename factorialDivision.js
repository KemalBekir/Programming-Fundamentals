function factorialDivision(x,y){
    let sumX = 1;
    let sumY = 1;

    for(let i = x; i > 0; i--){
        sumX *= i;
    }

    for(let j = y; j > 0; j--){
        sumY *= j;
    }

    console.log(`${(sumX / sumY).toFixed(2)}`);
}

factorialDivision(5,2)
factorialDivision(6,2)