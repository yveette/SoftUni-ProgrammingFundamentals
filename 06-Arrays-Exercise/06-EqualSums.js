function equalSum(arr) {
    let equal = false;
    for (let i = 0; i < arr.length; i++) {
        let leftSum = 0;
        let rightSum = 0;
        for (let j = 0; j < i; j++) {
            leftSum += arr[j];
        }

        for (let k = i + 1; k < arr.length; k++) {
            rightSum += arr[k];
        }

        if (leftSum == rightSum) {
            console.log(i);
            equal = true;
            break;
        }
    }
    
    if (!equal) {
        console.log('no');
    }
}

equalSum([1, 2, 3, 3]); // 2
equalSum([1, 2]); // no
equalSum([1]); // 0
equalSum([1, 2, 3]); // no
equalSum([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]); // 3
