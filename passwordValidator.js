function passwordValidator(input) {
   
    passLength(input);
    isLetterAndDigits(input);
    isItTwoDigitis(input);

    function passLength(input) {
        if (input.length >= 6 && input.length <= 10) {
            return true;
        } else {
            return false;
        }
    }

    function isLetterAndDigits(input) {
        for (let char of input) {
            let charCode = char.charCodeAt(0);

            if (!(charCode >= 48 && charCode <= 57) &&
                !(charCode >= 65 && charCode <= 90) &&
                !(charCode >= 97 && charCode <= 122)
            ) {
                return false;
            }
        }
        return true;
    }

    function isItTwoDigitis(input){
        let counter = 0;

        for(let char of input){
            let charCode = char.charCodeAt(0);

            if(charCode >= 48 && charCode <= 57){
                counter++;
            }
        }

        if(counter >= 2){
            return true;
        } else {
            return false;
        }
    }

    let isCorrectLength = passLength(input);
    let hasLetterAndDigits = isLetterAndDigits(input);
    let containsTwoDigits = isItTwoDigitis(input);

    if(isCorrectLength && hasLetterAndDigits && containsTwoDigits){
        console.log(`Password is valid`);
    }

    if(!isCorrectLength){
        console.log(`Password must be between 6 and 10 characters`);
    }

    if(!hasLetterAndDigits){
        console.log(`Password must consist only of letters and digits`);
    }

    if(!containsTwoDigits){
        console.log(`Password must have at least 2 digits`);
    }
}

passwordValidator('logIn')
passwordValidator('MyPass123')
passwordValidator('Pa$s$s')