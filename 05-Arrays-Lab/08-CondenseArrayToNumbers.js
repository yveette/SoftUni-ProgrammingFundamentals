function condenseArr(arr) {
    let sum = 0;
    let newArr = [];
    for (let i = 0; i < arr.length - 1; i++) {
        let num1 = Number(arr[i]);
        let num2 = Number(arr[i + 1]);
        let sum = num1 + num2;
        newArr.push(sum);

    }
    console.log(sum);
}

condenseArr([2, 10, 3]); // 25
// 2 10 3 => 2+10 10+3 => 12 13 => 12 + 13 => 25
condenseArr([5, 0, 4, 1, 2]); // 35
condenseArr([1]); // 1