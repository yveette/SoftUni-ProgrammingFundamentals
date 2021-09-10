function pianist(input) {
    let n = Number(input.shift());
    let catalog = {};

    for (let i = 0; i < n; i++) {
        let [name, composer, key] = input.shift().split('|');
        catalog[name] = {
            composer,
            key
        };
    }

    while (input[0] != 'Stop') {
        let tokens = input.shift().split('|');
        let [command, name, composer, key] = tokens;

        if (command == 'Add') {
            if (catalog[name] != undefined) {
                console.log(`${name} is already in the collection!`);
            } else {
                catalog[name] = {
                    composer,
                    key
                }
                console.log(`${name} by ${composer} in ${key} added to the collection!`)
            }
        } else if (command == 'Remove') {
            if (catalog[name] == undefined) {   //or catalog.hasOwnProperty(name)==false
                console.log(`Invalid operation! ${name} does not exist in the collection.`);
            } else {
                delete catalog[name];
                console.log(`Successfully removed ${name}!`);
            }
        } else if (command == 'ChangeKey') {
            if (catalog[name] == undefined) {
                console.log(`Invalid operation! ${name} does not exist in the collection.`);
            } else {
                catalog[name].key = composer;
                console.log(`Changed the key of ${name} to ${composer}!`);
            }
        }
    }

    let sorted = Object.entries(catalog).sort((a, b) => {
        let nameA = a[0];
        let nameB = b[0];

        let composerA = a[1].composer;
        let composerB = b[1].composer;

        return nameA.localeCompare(nameB) || composerA.localeCompare(composerB);
    });

    for (let [name, piece] of sorted) {
        console.log(`${name} -> Composer: ${piece.composer}, Key: ${piece.key}`)
    }
}

pianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]);
/*
Sonata No.2 by Chopin in B Minor added to the collection!
Hungarian Rhapsody No.2 by Liszt in C# Minor added to the collection!
Fur Elise is already in the collection!
Successfully removed Clair de Lune!
Changed the key of Moonlight Sonata to C# Major!
Fur Elise -> Composer: Beethoven, Key: A Minor
Hungarian Rhapsody No.2 -> Composer: Liszt, Key: C# Minor
Moonlight Sonata -> Composer: Beethoven, Key: C# Major
Sonata No.2 -> Composer: Chopin, Key: B Minor
*/

console.log('----------');

pianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]);
/*
Spring by Vivaldi in E Major added to the collection!
Successfully removed The Marriage of Figaro!
Invalid operation! Turkish March does not exist in the collection.
Changed the key of Spring to C Major!
Nocturne by Chopin in C# Minor added to the collection!
Eine kleine Nachtmusik -> Composer: Mozart, Key: G Major
Hungarian Dance No.5 -> Composer: Brahms, Key: G Minor
La Campanella -> Composer: Liszt, Key: G# Minor
Nocturne -> Composer: Chopin, Key: C# Minor
Spring -> Composer: Vivaldi, Key: C Major
*/