function solve(input) {
    let line = input.shift();
    let object = {};
    let count = 0;

    while (line != 'Stop') {
        let [command, person, dish] = line.split('-');

        if (command == 'Like') {
            if (!Object.keys(object).includes(person)) {
                object[person] = [dish];
            } else {
                let dishes = Object.values(object)[0];
                if (!dishes.includes(dish)) {
                    object[person].push(dish);
                }
            }
        } else if (command == 'Unlike') {
            if (!Object.keys(object).includes(person)) {
                console.log(`${person} is not at the party.`);
            } else {
                let dishes = Object.values(object)[0];
                if (dishes.includes(dish)) {
                    console.log(`${person} doesn't like the ${dish}.`);
                    let index = dishes.indexOf(dish);
                    dishes = dishes.splice(index, 1);
                    count++;
                } else {
                    console.log(`${person} doesn't have the ${dish} in his/her collection.`);
                }
            }
        }

        line = input.shift();
    }

    let sorted = Object.entries(object).sort((a, b) => {
        let countA = a[1].length;
        let countB = b[1].length;

        let nameA = a[0];
        let nameB = b[0];

        return countB - countA || nameA.localeCompare(nameB);
    })


    for (let el of sorted) {
        if( el[1].length >=0){

            console.log(`${el[0]}: ${el[1].join(', ')}`);
        }else{

            console.log(`${el[0]}:`);

        }
    }

    console.log(`Unliked meals: ${count}`);
}


solve(["Like-Krisi-shrimps",
    "Like-Krisi-soup",
    "Like-Penelope-dessert",
    "Like-Misho-salad",
    "Stop"]);
/*
Krisi: shrimps, soup
Misho: salad
Penelope: dessert
Unliked meals: 0
*/

console.log('----');

solve(["Like-Krisi-shrimps",
    "Unlike-Vili-carp",
    "Unlike-Krisi-salad",
    "Stop"]);
/*
Vili is not at the party.
Krisi doesn't have the salad in his/her collection.
Krisi: shrimps
Unliked meals: 0
*/

console.log('----');

solve(["Like-Katy-fish",
    "Unlike-Katy-fish",
    "Stop"]);
/*Katy doesn't like the fish.
Katy: 
Unliked meals: 1
*/