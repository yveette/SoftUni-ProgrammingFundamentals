function distinctArr(arr) {
    let newArr = [];
    for (let num of arr) {
        if (!newArr.includes(num)) {
            newArr.push(num);
        }
    }
    console.log(newArr.join(' '));
}

distinctArr([1, 2, 3, 4]);
// 1 2 3 4

distinctArr([7, 8, 9, 7, 2, 3, 4, 1, 2]);
// 7 8 9 2 3 4 1

distinctArr([20, 8, 12, 13, 4, 4, 8, 5]);
// 20 8 12 13 4 5