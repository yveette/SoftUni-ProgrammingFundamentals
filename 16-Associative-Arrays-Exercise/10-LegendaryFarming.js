function legendaryFarming(string) {
    let arr = string.split(' ');

    let junk = {};
    let special = {
        "shards": 0,
        "fragments": 0,
        "motes": 0,
    };

    for (let i = 0; i < arr.length - 1; i += 2) {
        let quantity = Number(arr[i]);
        let item = arr[i + 1].toLowerCase();

        if (item == "shards" || item == "fragments" || item == "motes") {
            special[item] += quantity;

            if (special["shards"] >= 250) {
                special["shards"] -= 250;
                console.log('Shadowmourne obtained!');
                break;
            } else if (special["fragments"] >= 250) {
                special["fragments"] -= 250;
                console.log('Valanyr obtained!');
                break;
            } else if (special["motes"] >= 250) {
                special["motes"] -= 250;
                console.log('Dragonwrath obtained!');
                break;
            }
        } else {
            if (!Object.keys(junk).includes(item)) {
                junk[item] = 0;
            }
            junk[item] += quantity;
        }
    }

    let sortedSpecial = Object.entries(special).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

    for (let [item, quantity] of sortedSpecial) {
        console.log(`${item}: ${quantity}`);
    }

    let sortedJunk = Object.entries(junk).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [item, quantity] of sortedJunk) {
        console.log(`${item}: ${quantity}`);
    }
}

legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');
/*
Valanyr obtained!
fragments: 5
shards: 5
motes: 3
leathers: 6
stones: 5
*/

legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');
/*
Dragonwrath obtained!
shards: 22
motes: 19
fragments: 0
fangs: 9
silver: 123
*/

legendaryFarming('25 shards 1 motes 4 fragments');
/*
shards: 25
fragments: 4
motes: 1
*/