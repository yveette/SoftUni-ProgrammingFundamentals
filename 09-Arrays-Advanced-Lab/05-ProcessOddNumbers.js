function oddIndexes(arr) {
    let filtered = arr.filter((x, i) => i % 2 == 1);
    let mapped = filtered.map(x => x * 2);
    mapped.reverse();
    console.log(mapped.join(' '));
}

oddIndexes([10, 15, 20, 25]); // 50 30
oddIndexes([3, 0, 10, 4, 7, 3]); // 6 8 0