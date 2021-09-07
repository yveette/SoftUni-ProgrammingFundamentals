function sum(a, b, c) {
    let result = a + b;
    substract(result, c);

    function substract(result, c) {
        result -= c;
        console.log(result);
    }
}

sum(23, 6, 10); // 19
sum(1, 17, 30); // -12
sum(42, 58, 100); // 0