function maxNumber(arr) {
    let mNumber = [];

    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];
        let isMax = true;
        for (let j = i + 1; j < arr.length; j++) {
            let next = arr[j];
           if(next >= currentNum){
               isMax = false;
               break;
           }
        }
        if(isMax){
            mNumber.push(currentNum);
        }   
    }
    console.log(mNumber.join(" "));
}

maxNumber([1, 4, 3, 2])
maxNumber([14, 24, 3, 19, 15, 17])
maxNumber([41, 41, 34, 20])
maxNumber([27, 19, 42, 2, 13, 45, 48])