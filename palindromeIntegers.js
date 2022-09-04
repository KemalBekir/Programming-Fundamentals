function palindromeIntegers(listOfNumbers){
    for(let number of listOfNumbers){
        let numbersAsString = number.toString();
        let reverseString =  numbersAsString.split('').reverse().join('');

        if(numbersAsString === reverseString){
            console.log(true);
        } else {
            console.log(false);
        }
    }
}

palindromeIntegers([123,323,421,121])
palindromeIntegers([32,2,232,1010])