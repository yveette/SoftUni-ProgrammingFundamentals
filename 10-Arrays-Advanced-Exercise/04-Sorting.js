function sorting(arr) {
    let final = [];
    let arrLength = arr.length;

    for (let i = 0; i < arrLength; i++) {

        let add;

        if (i % 2 == 0) {
            add = Math.max(...arr);
        } else {
            add = Math.min(...arr);
        }

        final.push(add);
        arr.splice(arr.indexOf(add), 1);
    }
    console.log(final.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
// 94 1 69 2 63 3 52 18 31 21