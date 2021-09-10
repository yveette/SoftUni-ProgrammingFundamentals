function travelTime(arr) {
    let destinations = {};

    for (let token of arr) {
        let [country, town, cost] = token.split(' > ');

        if (!Object.keys(destinations).includes(country)) {
            destinations[country] = {};
        }

        if (!Object.keys(destinations[country]).includes(town)) {
            destinations[country][town] = Number(cost);
        }

        if (Number(cost) < destinations[country][town]) {
            destinations[country][town] = Number(cost);
        }
    }

    //First sort Country names alphabetically and then sort by lowest Travel cost.
    let sorted = Object
        .entries(destinations)
        .sort((a, b) => a[0].localeCompare(b[0])) ||
        Object.values(a[1].reduce((x, y) => x + y) - Object.values(b[1].reduce((x, y) => x + y)));

    for (let [country, towns] of sorted) {
        let townsString = Object.entries(towns).map(x => `${x[0]} -> ${x[1]}`);
        console.log(`${country} -> ${townsString.join(' ')}`);
    }
}

travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"]);
/*
Albania -> Tirana -> 1000
Bulgaria -> Sofia -> 200 Sopot -> 800
France -> Paris -> 2000
*/