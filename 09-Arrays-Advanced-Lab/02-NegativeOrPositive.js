function negativeOrPositive(arr) {
    let result = [];

    for (let num of arr) {
        if (num < 0) {
            result.unshift(num);
        } else {
            result.push(num);
        }
    }

    for (let num of result) {
        console.log(num);
    }
}

negativeOrPositive([7, -2, 8, 9]); // -2 7 8 9
negativeOrPositive([3, -2, 0, -1]); // -1 -2 3 0