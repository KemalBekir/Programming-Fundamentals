function inventory(input) {
    let heroes = [];

    for (let heroString of input) {
        let tokens = heroString.split(' / ');
        let name = tokens[0];
        let level = Number(tokens[1]);
        let items = tokens[2].split(", ");

        let heroData = {
            name,
            level,
            items,
        }

        heroes.push(heroData);
    }

    let sorted = heroes.sort((a, b) => a.level - b.level);
    for (let hero of sorted) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.sort((a, b) => a.localeCompare(b)).join(', ')}`);
    }

}

inventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
])