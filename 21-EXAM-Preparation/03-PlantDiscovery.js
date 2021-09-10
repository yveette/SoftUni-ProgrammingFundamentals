function plantDiscovery(input) {
    let n = Number(input.shift());

    let actions = {
        "Rate": rate,
        "Update": update,
        "Reset": reset
    };
    let catalog = {};

    for (let i = 0; i < n; i++) {
        let [name, rarity] = input.shift().split('<->');

        catalog[name] = {
            rarity: Number(rarity),
            ratings: [],
            averageRating: 0
        }
        // automatic refresh if there is name
    }

    while (input[0] != 'Exhibition') {
        let [command, pieces] = input.shift().split(': ');
        let action = actions[command];
        action(pieces);
    }

    //The plants should be sorted by rarity descending, then by average rating descending
    let sorted = Object.entries(catalog).sort((a, b) => {
        let rarityA = a[1].rarity;
        let rarityB = b[1].rarity;

        let ratingA = a[1].averageRating;
        let ratingB = b[1].averageRating;

        return (rarityB - rarityA) || (ratingB - ratingA);
    });

    console.log('Plants for the exhibition:');

    for (let [name, plant] of sorted) {
        console.log(`- ${name}; Rarity: ${plant.rarity}; Rating: ${plant.averageRating.toFixed(2)}`);
    }

    function rate(pieces) {
        let [name, rating] = pieces.split(' - ');

        if (catalog[name] != undefined) {
            let plant = catalog[name];
            plant.ratings.push(Number(rating));

            let total = 0;
            for (let rating of plant.ratings) {
                total += rating;
            }
            plant.averageRating = total / plant.ratings.length;

        } else {
            console.log('error');
        }
    }
    function update(pieces) {
        let [name, rarity] = pieces.split(' - ');

        if (catalog[name] != undefined) {
            let plant = catalog[name];
            plant.rarity = Number(rarity);
        } else {
            console.log('error');
        }
    }
    function reset(name) {
        if (catalog[name] != undefined) {
            let plant = catalog[name];
            plant.ratings.length = 0;
            // trim element from array
            plant.averageRating = 0;
        } else {
            console.log('error');
        }
    }
}

plantDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"
]);
/*
Plants for the exhibition:
- Woodii; Rarity: 5; Rating: 7.50
- Arnoldii; Rarity: 4; Rating: 0.00
- Welwitschia; Rarity: 2; Rating: 7.00
*/

console.log('-----------');

plantDiscovery(["2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"
]);
/*
Plants for the exhibition:
- Oahu; Rarity: 10; Rating: 7.00
- Candelabra; Rarity: 10; Rating: 6.00
*/
