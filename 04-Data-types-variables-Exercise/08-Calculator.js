function calculate(num1, operator, num2) {
    let result = 0;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
    }
    console.log(result.toFixed(2));
}

calculate(5, '+', 10); // 15.00
calculate(25.5, '-', 3); // 22.50