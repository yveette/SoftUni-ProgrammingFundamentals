function racing(input) {
    let namePattern = /[A-Za-z]/g;
    let distancePattern = /\d/g;

    let racersName = input.shift().split(', ');
    let racers = {};
    for (let name of racersName) {
        racers[name] = 0;
    }

    while (input[0] != 'end of race') {
        let line = input.shift();

        let letters = line.match(namePattern);
        let numbers = line.match(distancePattern);

        let name = letters.join('')
        let distances = numbers.map(Number);


        if (racers[name] != undefined) {
            let totalDist = 0;
            for (let digit of distances) {
                totalDist += digit;
            }
            racers[name] += totalDist;
        }
    }

    // At the end print the top 3 racers ordered by distance in descending 
    let sorted = Object.entries(racers).sort((a, b) => b[1] - a[1]).slice(0, 3);
    if (sorted[0]) {
        console.log('1st place: ' + sorted[0][0]);
    }
    if (sorted[1]) {
        console.log('2nd place: ' + sorted[1][0]);
    }
    if (sorted[2]) {
        console.log('3rd place: ' + sorted[2][0]);
    }
}

racing(["George, Peter, Bill, Tom",
    "G4e@55or%6g6!68e!!@",
    "R1@!3a$y4456@",
    "B5@i@#123ll",
    "G@e54o$r6ge#",
    "7P%et^#e5346r",
    "T$o553m&6",
    "end of race"]);
/*
1st place: George
2nd place: Peter
3rd place: Tom
*/