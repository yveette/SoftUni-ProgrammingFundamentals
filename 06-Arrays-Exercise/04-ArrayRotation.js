function arrRotation(arr, n) {
    let num = n;
    while (num > 0) {
        let change = arr.shift();
        arr.push(change)
        num--;
    }
    console.log(arr.join(' '));
}

arrRotation([51, 47, 32, 61, 21], 2);
// 32 61 21 51 47

arrRotation([32, 21, 61, 1], 4);
// 32 61 21 51 47

arrRotation([2, 4, 15, 31], 5);
// 4 15 31 2