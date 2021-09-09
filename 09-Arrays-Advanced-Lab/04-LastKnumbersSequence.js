function lastK(n, k) {
    let result = [1];

    for (let i = 1; i < n; i++) {

        let current = 0;
        for (let num of result.slice(-k)) {
            current += num;
        }

        result.push(current);
    }

    console.log(result.join(' '));
}

lastK(6, 3);
// 1 1 2 4 7 13
lastK(8, 2);
// 1 1 2 3 5 8 13 21