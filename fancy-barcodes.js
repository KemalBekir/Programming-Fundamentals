function solve(input) {
    let n = Number(input.shift());
    let result = [];

    let pattern = /(@(#{1,}))([A-Z][a-z0-9[A-Z]{4,})\1/;
    let findNum = /\d+/g;

    for (let line of input) {
        let matches = line.match(pattern);
        if (matches != null) {
            barcode = line.match(findNum);
            barcode === null
                ? console.log(`Product group: 00`)
                : console.log(`Product group: ${barcode.join('')}`);
        } else {
            console.log(`Invalid barcode`);
        }
    }

}


solve([
    "3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"
])

console.log('----------');

solve([
    "6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"
])

/*
function solve(input) {

    let numberOfbarcode = Number(input.shift());

    let pattern = /^(?<start>@#+)(?<barcode>[A-Z][A-Za-z0-9]{4,}[A-Z])(?<end>@#+)$/;

    for (const line of input) {

        let code = '';

        match = pattern.exec(line);

        if (match) {

            for (const el of match.groups.barcode) {

                if (el.charCodeAt() >= 48 && el.charCodeAt() <= 57) {

                    code += el;

                }

            }

            code == '' ? console.log(`Product group: 00`) : console.log(`Product group: ${code}`);

        } else {

            console.log(`Invalid barcode`);

        }

    }

}
*/