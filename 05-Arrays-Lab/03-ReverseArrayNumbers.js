function reversed(num, arr) {
    let sliceArr = [];

    for (let i = 0; i < num; i++) {
        sliceArr.push(arr[i]);
    }

    let newArr = [];

    for (let j = sliceArr.length - 1; j >= 0; j--) {
        newArr.push(sliceArr[j]);
    }

    console.log(newArr.join(' '));
}

reversed(3, [10, 20, 30, 40, 50]);
// 30 20 103

reversed(4, [-1, 20, 99, 5]);
// 5 99 20 -1

reversed(2, [66, 43, 75, 89, 47]);
// 43 66