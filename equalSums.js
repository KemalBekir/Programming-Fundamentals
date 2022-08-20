function equalSums(arr) {
    let areEqual = false;

    for (let i = 0; i < arr.length; i++) {
        let leftSum = 0;
        let rightSum = 0;

        //calculating the left sum
        for (let leftIndx = 0; leftIndx < i; leftIndx++) {
            let currentNumber = arr[leftIndx];
            leftSum += currentNumber;
        }

        //calculating the right sum
        for (let rightIndx = i + 1; rightIndx < arr.length; rightIndx++) {
            let currentNuber = arr[rightIndx];
            rightSum += currentNuber;
        }

        //check if equal
        if (leftSum === rightSum) {
            // print index and end program
            console.log(i);
            areEqual = true;
            break;
        }
    }

    if (!areEqual) {
        console.log("no");
    }
}

equalSums([1, 2, 3, 3])
equalSums([1, 2])
equalSums([1])
equalSums([1, 2, 3])
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])