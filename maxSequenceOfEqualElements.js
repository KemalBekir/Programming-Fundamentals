function maxSequenceOfEqualElements(arr){
    let leftMostIndex = 0;
    let longest = [];
    let isLongest = false;
    for(let i = 0; i < arr.length; i++){  
        let currentNumber = arr[i];
        let tempSeq = [currentNumber];
        for(let j = i + 1; j < arr.length; j++){
            let nextNumber = arr[j];
            if(nextNumber === currentNumber){
                tempSeq.push(nextNumber)
            } else {
                break;
            }
        }

        if(tempSeq.length > longest.length){
            longest = [];
            for(let j = 0; j < tempSeq.length; j++){
                longest.push(tempSeq[j]);
            }
        } else if(tempSeq.length === longest.length) {
            if(i < leftMostIndex){
                leftMostIndex = i;
            }
        }
       
    }
    console.log(longest.join(" "));
}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]) //2 2 2
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]) //1 1 1
maxSequenceOfEqualElements([4, 4, 4, 4]) //4 4 4 4
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]) //1 1