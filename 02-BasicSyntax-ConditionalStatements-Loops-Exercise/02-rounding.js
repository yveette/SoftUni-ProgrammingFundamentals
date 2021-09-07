function rounding(num, precision) {
    if (precision > 15) {
        precision = 15;
    }

    let num1 = num.toFixed(precision);
    num1 = parseFloat(num1);
    console.log(num1);
}

rounding(3.1415926535897932384626433832795, 2); // 3.14
rounding(10.5, 3); // 10.5