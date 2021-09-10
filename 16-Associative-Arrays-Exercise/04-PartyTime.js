function partyTime(guests) {
    let partyIndex = guests.indexOf('PARTY');
    let digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    let vips = [];
    let regulars = [];

    for (let i = 0; i < partyIndex; i++) {
        let current = guests[i];

        if (digits.includes(current[0])) {
            vips.push(current);
        } else {
            regulars.push(current);
        }
    }

    for (let i = partyIndex + 1; i < guests.length; i++) {
        let current = guests[i];

        if (vips.includes(current)) {
            vips.splice(vips.indexOf(current), 1);
        } else {
            regulars.splice(regulars.indexOf(current), 1);
        }
    }

    let totalCount = vips.length + regulars.length;
    console.log(totalCount);

    console.log(vips.join('\n'));
    console.log(regulars.join('\n'));
}

partyTime(['7IK9Yo0h', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc',
    'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc']);
/*
2
7IK9Yo0h
tSzE5t0p
*/

partyTime(['m8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0',
    '9CQBGUeJ', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL',
    'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'xys2FYzn',
    'MDzcM9ZK', 'PARTY', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL',
    'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'm8rfQBvl', 'fc1oZCE0',
'UgffRkOn', '7ugX7bm0', '9CQBGUeJ']);
/*
2
xys2FYzn
MDzcM9ZK
*/