function evenOdd(arr) {
    let even = 0;
    let odd = 0;
    for (let i = 0; i < arr.length; i++) {
        let num = Number(arr[i]);
        if (num % 2 == 0) {
            even += num;
        } else {
            odd += num;
        }
    }
    console.log(even - odd);
}

evenOdd([1, 2, 3, 4, 5, 6]); // 3
// 2 + 4 + 6 = 12, 1 + 3 + 5 = 9, 12 - 9 = 3
evenOdd([3, 5, 7, 9]); // -24
evenOdd([2, 4, 6, 8, 10]); // 30