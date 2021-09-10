function destinationMapper(input) {
    let pattern = /([=|\/])(?<dest>[A-Z][A-Za-z]{2,})(\1)/g;

    let match = pattern.exec(input);
    let destinations = [];
    while (match != null) {
        destinations.push(match.groups.dest);
        match = pattern.exec(input);
    }

    let sum = 0;
    for (let el of destinations) {
        sum += el.length;
    }
    console.log('Destinations: ' + destinations.join(', '));
    console.log(`Travel Points: ${sum}`);
}

destinationMapper('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=');
// Destinations: Hawai, Cyprus
// Travel Points: 11

destinationMapper('ThisIs some InvalidInput');
// Destinations:
// Travel Points: 0