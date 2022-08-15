function houseParty(arr) {
    let guestList = [];

    for (let token of arr) {
        let a  = token.split(' ');
        let currentGuest = a[0];
        
        if(token.includes('not')){
            if(guestList.includes(currentGuest)){
                guestList.splice(guestList.indexOf(currentGuest), 1)
            } else {
                console.log(`${currentGuest} is not in the list!`);
            }
        } else {
            if (guestList.includes(currentGuest)){
                console.log(`${currentGuest} is already in the list!`);
            } else {
                guestList.push(currentGuest);
            }
        }

    }
  
    for(let guest of guestList){
        console.log(guest);
    }
}

houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'])
houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!'])