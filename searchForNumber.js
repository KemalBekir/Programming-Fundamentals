function searchForNumber(arr,params){
    let numElements = params[0];
    let delNumElements = params[1];
    let searchNum = params[2];
    let count = 0;

    let result = arr.splice(0,numElements).splice(delNumElements);
    
    for(let i = 0; i < result.length; i++){
        let currentNum = result[i];

        if(currentNum === searchNum){
            count ++;
        }
    }

    console.log(`Number ${searchNum} occurs ${count} times.`);
}

searchForNumber(
    [5, 2, 3, 4, 1, 6],
    [5, 2, 3])