
//   split pattern /\s*,\s*/g
//   demon health pattern /([^0-9^\+^\-^\*^\/^\.])/g 
//   sum pattern = /([+|-]?[0-9]+[.]*?[0-9]+|[+|-]?[0-9]+)/g
//   damage pattern /(\*|\/)/g
//    


function solve(input) {
    let splitPattern = / *, */g;
    let demonsArr = input.split(splitPattern);
    let demons = {};
    let healthPattern = /([^0-9^\+^\-^\*^\/^\.])/g;
    let sumPattern = /([+|-]?[0-9]+[.]*?[0-9]+|[+|-]?[0-9]+)/g;
    let dmgPattern = /(\*|\/)/g;

    for (let demon of demonsArr) {
        let hp = 0;
        let dmg = 0;
        if (demon.match(healthPattern) != null) {
            for (let char of demon.match(healthPattern)) {
                hp += char.charCodeAt();
            }
        }

        let numbers = demon.match(sumPattern);

        if (numbers != null) {
            for (let num of numbers) {
                dmg += Number(num);
            }
        }

        let subOrMult = demon.match(dmgPattern);

        if (subOrMult != null) {
            for (let op of subOrMult) {
                if (op == '*') {
                    dmg *= 2;
                } else {
                    dmg /= 2;
                }
            }
        }

        demons[demon] = {
            hp: Number(hp),
            dmg: Number(dmg)
        };
    }
    let sorted = Object.entries(demons).sort((a, b) => {
        let nameA = a[0];
        let nameB = b[0];

        return nameA.localeCompare(nameB);
    });

    for (let [name, params] of sorted) {
        console.log(`${name} - ${params.hp} health, ${params.dmg.toFixed(2)} damage`);
    }
}

solve('M3ph-0.5s-0.5t0.0**')
solve('M3ph1st0**, Azazel')
solve('Gos/ho')