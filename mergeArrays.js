function mergeArrays(first, second){
    let third = [];
    let sum = 0;
    for (let i = 0; i < first.length; i++){
        if(i % 2 === 0){
            sum = Number(first[i]) + Number(second[i]);
            third[i] = sum;
            //third.join(" - ");
        } else {
            third[i] = first[i] + second[i];
            //third.join(" - ");
        }
    }
    console.log(third.join(" - "));
}
//22 - 1522 - 110 - 5636 - 46
///35 - 12312333 - 10 - 77122 - 48
mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11'])
mergeArrays(['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44'])