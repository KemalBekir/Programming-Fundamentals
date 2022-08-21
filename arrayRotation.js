function arrayRotation(arr, rotations){
    for(let i = 0; i < rotations; i++){
        let first = arr[0];

        for(let j = 0; j < arr.length - 1; j++){
            arr[j] = arr[j + 1];
        }
        let last = arr.length - 1;
        arr[last] = first; 
    }
    console.log(arr.join(" "));
}

//arrayRotation([51, 47, 32, 61, 21], 2) //32 61 21 51 47
arrayRotation([32, 21, 61, 1], 4) //32 21 61 1
arrayRotation([2, 4, 15, 31], 5) //4 15 31 2