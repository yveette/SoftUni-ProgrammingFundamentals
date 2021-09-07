function oddOrEvenSum(num) {
    let numStr = num.toString();
    let even = 0;
    let odd = 0;

    for (let i = 0; i < numStr.length; i++) {  // може с for of цикъл
        let digit = Number(numStr[i]);
        if (digit % 2 == 0) {
            even += digit;
        } else {
            odd += digit;
        }
    }
    console.log(`Odd sum = ${odd}, Even sum = ${even}`)
}

oddOrEvenSum(1000435);
// Odd sum = 9, Even sum = 4

oddOrEvenSum(3495892137259234);
// Odd sum = 54, Even sum = 22