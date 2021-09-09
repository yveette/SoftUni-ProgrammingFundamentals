function inventory(list) {
    let heroes = [];
    for (let tokens of list) {
        let token = tokens.split(' / ');
        let hero = token[0];
        let level = Number(token[1]);
        let items = token[2].split(', ');

        let heroObject = {
            hero,
            level,
            items,
        }
        heroes.push(heroObject);
    }

    let sortedHeros = heroes.sort((a, b) => a.level - b.level);

    for (let hero of sortedHeros) {
        console.log(`Hero: ${hero.hero}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.sort((a, b) => a.localeCompare(b)).join(', ')}`);
    }
}

inventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"]);

/*
Hero: Hes
level => 1
items => Antara, Desolator, Sentinel
Hero: Derek
level => 12
items => BarrelVest, DestructionSword
Hero: Isacc
level => 25
items => Apple, GravityGun
*/