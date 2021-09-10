function schoolGrades(arr) {
    let map = new Map();

    for (let token of arr) {
        let tokens = token.split(' ');
        let name = tokens.shift();
        let grades = tokens.map(Number);

        if (!map.has(name)) {
            map.set(name, []);
        }

        let existing = map.get(name);
        for (let grade of grades) {
            existing.push(grade);
        }
    }

    let sorted = Array.from(map).sort(average);

    for (let token of sorted) {
        console.log(`${token[0]}: ${token[1].join(', ')}`)
    }

    function average(a, b) {
        let aSum = 0;
        a[1].forEach(x => aSum += x);
        let aAverage = aSum / a[1].length;

        let bSum = 0;
        b[1].forEach(x => bSum += x);
        let bAverage = bSum / b[1].length;

        return aAverage - bAverage;
    }
}

schoolGrades(['Lilly 4 6 6 5', 'Tim 5 6','Tammy 2 4 3', 'Tim 6 6']);
// Tammy: 2, 4, 3
// Lilly: 4, 6, 6, 5
// Tim: 5, 6, 6, 6
