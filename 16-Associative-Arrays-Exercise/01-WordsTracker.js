function wordsTracker(arr) {
    let findWords = arr.shift().split(' ');

    let words = {};

    for (let word of findWords) {
        words[word] = 0;
    }

    for (let token of arr) {
        if (Object.keys(words).includes(token)) {
            words[token] += 1;
        }
    }

    let sorted = Object.entries(words).sort((a, b) => b[1] - a[1]);

    for (let [key, value] of sorted) {
        console.log(`${key} - ${value}`);
    }
}

wordsTracker([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task']);
// this - 3
// sentence - 2
    