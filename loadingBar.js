function loadingBar(input) {
    let num = input / 10;
    let result = '';

    for (let i = 0; i < num; i++) {
        result += "%";
    }

    for (let i = 0; i < 10 - num; i++){
        result += '.';
    }


    if (input % 100 == 0) {
        console.log(`${input}% Complete!`);
        console.log(`[${result}]`);
    } else {
        console.log(`${input}% [${result}]`);
        console.log(`Still loading...`);
    }

}

loadingBar(30)
loadingBar(50)
loadingBar(100)