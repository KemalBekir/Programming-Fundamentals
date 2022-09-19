function partyTime(input) {
    let partyIndex = input.indexOf('PARTY');
    let vip = [];
    let regular = [];
    let digitList = ['0','1','2','3','4','5','6','7','8','9'];
    // add guest
    for(let i = 0; i < partyIndex; i++){
        let currentGuest = input[i];

        if(digitList.includes(currentGuest[0])){
            vip.push(currentGuest);
        } else {
            regular.push(currentGuest);
        }
    }

    // remove guest
    for(let i = partyIndex + 1; i < input.length; i++){
        let currentGuest = input[i];

        if(vip.includes(currentGuest)){
            vip.splice(vip.indexOf(currentGuest), 1);
        } else if(regular.includes(currentGuest)){
            regular.splice(regular.indexOf(currentGuest), 1);
        }
    }

    let totalGuest = vip.length + regular.length;
    console.log(totalGuest);

    for(let guest of vip){
        console.log(guest);
    }

    for(let guest of regular){
        console.log(guest);
    }

}

partyTime([
    '7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
])
partyTime([
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
])