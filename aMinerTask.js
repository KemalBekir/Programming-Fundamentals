function aMinerTask(input) {
    let resource = {};

    for (let i = 0; i < input.length; i += 2) {
        let currentEl = input[i];
        let quantity = Number(input[i + 1]);
        if (!resource.hasOwnProperty(currentEl)) {
            resource[currentEl] = [];
        } else {
            resource[currentEl] += quantity;
            continue;
        }
        resource[currentEl] = quantity;

    }
    for (let [key, value] of Object.entries(resource)) {
        console.log(`${key} -> ${value}`);
    }
}
aMinerTask([
    'Gold',
    '10',
    'gold',
    '10',
    'Gold',
    '10',
    'gold',
    '10'
])
// aMinerTask([
//     'Gold',
//     '155',
//     'Silver',
//     '10',
//     'Copper',
//     '17'
// ])
// aMinerTask([
//     'gold',
//     '155',
//     'silver',
//     '10',
//     'copper',
//     '17',
//     'gold',
//     '15'
// ]
// )
