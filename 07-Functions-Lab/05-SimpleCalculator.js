function calculator(a, b, operator) {
    let result;
    switch (operator) {
        case 'multiply':
            result = a * b;   // или  let multiply = (a,b) => a*b;    // console.log(multiply(a,b));  //break;
            break;
        case 'divide':
            result = a / b;
            break;
        case 'add':
            result = a + b;
            break;
        case 'subtract':
            result = a - b;
            break;
    }
    console.log(result);
}

calculator(5, 5, 'multiply'); // 25
calculator(40, 8, 'divide'); // 5
calculator(12, 19, 'add'); // 31
calculator(50, 13, 'subtract'); // 37