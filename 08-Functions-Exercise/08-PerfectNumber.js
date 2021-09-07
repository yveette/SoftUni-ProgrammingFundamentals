function perfectNum(n) {
    // A perfect number is a positive integer
    //  that is equal to the sum of its proper positive divisors. 
    let sum = 0
    for (let i = 1; i < n; i++) {
        if (n % i == 0) {
            sum += i
        }
    }

    if (sum == n) {
        return 'We have a perfect number!'
    } else {
        return 'It\'s not so perfect.'
    }
}

let result = perfectNum(6);
console.log(result);

// perfectNum(6); =>  We have a perfect number!
// perfectNum(28); =>  We have a perfect number!
// perfectNum(1236498); =>  It's not so perfect.