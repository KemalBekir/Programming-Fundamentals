function matrix(input) {
    let number = Number(input);
    for (let i = 0; i < number; i++) {
        let result = 0;
        for (let j = 0; j < number; j++) {
            result += number;
            result += ' ';
        }
        console.log(result);
    }
}

matrix(3)
matrix(7)
