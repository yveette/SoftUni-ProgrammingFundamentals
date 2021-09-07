function sumNums(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let a = Number(arr[i]);
        if (a % 2 == 0) {
            sum += a;
        }
    }
    console.log(sum);
}

// or

for (let num of arr) {
    if (num % 2 == 0) {
        sum += num;
    }
}

sumNums(['1', '2', '3', '4', '5', '6']);
sumNums(['3', '5', '7', '9']);
sumNums(['2', '4', '6', '8', '10']);