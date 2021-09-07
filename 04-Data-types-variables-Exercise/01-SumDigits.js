function sumDigits(n) {
    let num = n.toString();
    let sum = 0;

    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i]);
    }
    console.log(sum);
}

sumDigits(245678); // 32
sumDigits(97561); // 28
sumDigits(543); // 12