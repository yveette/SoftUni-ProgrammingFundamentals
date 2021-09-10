function minerTask(arr) {
    let mined = {};
    for (let i = 0; i < arr.length; i += 2) {
        let resource = arr[i];
        let quantity = Number(arr[i + 1]);

        if (!Object.keys(mined).includes(resource)) {
            mined[resource] = quantity;
        } else {
            mined[resource] += quantity;
        }
    }

    for (let [resource, quantity] of Object.entries(mined)) {
        console.log(`${resource} -> ${quantity}`);
    }
}

minerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17']);
/*
Gold -> 155
Silver -> 10
Copper -> 17
*/

minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15']);
/*
gold -> 170
silver -> 10
copper -> 17
*/