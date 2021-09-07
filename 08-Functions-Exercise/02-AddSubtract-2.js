function addAndSubtract(a, b, c) {
    function sum(num1, num2) {
        let result = num1 + num2;
        return result;
    }

    function subract(num1, num2) {
        let result = num1 - num2;
        return result;
    }

    let sums = sum(a, b);
    let final = subract(sums, c);
    return final;
}

let result = addAndSubtract(42, 58, 100);
console.log(result);