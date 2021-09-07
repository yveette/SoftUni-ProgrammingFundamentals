function addSubNum(arr) {
    let sum1 = 0;
    let sum2 = 0;

    for (let i = 0; i < arr.length; i++) {
        let n = Number(arr[i]);
        if (n % 2 == 0) {
            arr[i] = n + i;
            sum1 += n;
            sum2 += arr[i];
        } else {
            arr[i] = n - i;
            sum1 += n;
            sum2 += arr[i];
        }
    }
    console.log(arr);
    console.log(sum1);
    console.log(sum2);
}

addSubNum([5, 15, 23, 56, 35]);
// [ 5, 14, 21, 59, 31 ]
// 134
// 130

addSubNum([-5, 11, 3, 0, 2]);
// [ -5, 10, 1, 3, 6 ]
// 11
// 15
