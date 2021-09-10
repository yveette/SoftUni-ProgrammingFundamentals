function wordOccurrences(arr) {
    let map = new Map();
    for (let token of arr) {

        if (!map.has(token)) {
            map.set(token, 1);
        } else {
            let currentC = map.get(token);
            let newCount = currentC + 1;
            map.set(token, newCount);
        }
    }

    // Sort by count - descending
    let sorted = Array.from(map).sort((a, b) => b[1] - a[1]);

    for (let token of sorted) {
        console.log(`${token[0]} -> ${token[1]} times`);
    }
}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);
/*
sentence -> 3 times
Here -> 2 times
is -> 2 times
the -> 2 times
first -> 1 times
another -> 1 times
And -> 1 times
finally -> 1 times
third -> 1 times
*/