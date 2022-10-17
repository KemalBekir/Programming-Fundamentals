function solve(input) {
    let password = input.shift();


    while (input[0] != 'Complete') {
        let line = input.shift();

        if (line.includes('Make Upper')) {
            let tokens = line.split(' ');
            let index = Number(tokens[2]);
            let left = password.substring(0, index);
            let center = password.substring(index, index + 1).toUpperCase();
            let right = password.substring(index + 1);
            password = left + center + right;
            console.log(password);
        } else if (line.includes('Make Lower')) {
            let tokens = line.split(' ');
            let index = Number(tokens[2]);
            let left = password.substring(0, index);
            let center = password.substring(index, index + 1).toLowerCase();
            let right = password.substring(index + 1);
            password = left + center + right;
            console.log(password);
        } else if (line.includes('Insert')) {
            let tokens = line.split(' ');
            let index = tokens[1];
            let char = tokens[2];
            if (index >= 0 && index < password.length) {
                let left = password.substring(0, index);
                let right = password.substring(index);
                password = left + char + right;
                console.log(password);
            }
        } else if (line.includes('Replace')) {
            let tokens = line.split(' ');
            let char = tokens[1];
            let value = Number(tokens[2]);
            let sum = char.charCodeAt() + value;
            if (password.includes(char)) {
                password = password.split(char).join(String.fromCharCode(sum));
                console.log(password);
            }
        } else if (line.includes('Validation')) {
            let smCount = 0;
            let lrgCount = 0;
            let digit = 0;
            let under = 0;
            let badSigns = 0;
            for (let item of password) {
                if (item.charCodeAt() >= 65 && item.charCodeAt() <= 90) {
                    lrgCount++;
                }
                if (item.charCodeAt() >= 97 && item.charCodeAt() <= 122) {
                    smCount++;
                }
                if (item.charCodeAt() >= 48 && item.charCodeAt() <= 57) {
                    digit++;
                }
                if (item.charCodeAt() == 95) {
                    under++;
                }
                if (!((item.charCodeAt() >= 65 && item.charCodeAt() <= 90) ||
                (item.charCodeAt() >= 97 && item.charCodeAt() <= 122) || 
                (item.charCodeAt() >= 48 && item.charCodeAt() <= 57) || 
                (item.charCodeAt() == 95))) {
                    badSigns++;
                }
            }
            if (password.length < 8) {
                console.log('Password must be at least 8 characters long!');
            }
            if (badSigns > 0) {
                console.log(`Password must consist only of letters, digits and _!`);
            }
            if (lrgCount == 0) {
                console.log('Password must consist at least one uppercase letter!');
            }
            if (smCount == 0) {
                console.log('Password must consist at least one lowercase letter!');
            }
            if (digit == 0) {
                console.log('Password must consist at least one digit!');
            }
        }

    }
}

// 7nval7dpassword*
// 7nval7dpassword4
// 7nVal7dpassword4

solve(['invalidpassword*',
    'Add 2 p',
    'Replace i -50',
    'Replace * 10',
    'Make Upper 2',
    'Validation',
    'Complete'])
console.log('-----');
solve(['123456789',
    'Insert 3 R',
    'Replace 5 15',
    'Validation',
    'Make Lower 3',
    'Complete'])
console.log('-----');
solve(['$assw$rd*',
    'Add 2 p',
    'Replace i -50',
    'Replace * 10',
    'Make Upper 2',
    'Validation',
    'Complete'])