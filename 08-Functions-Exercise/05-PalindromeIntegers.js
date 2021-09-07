function palindromeNum(arr) {
    // A palindrome is a number which reads the same backward as forward,
    // such as 323 or 1001. 
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        let check = num.toString();
        let result = '';
        for (let j = check.length - 1; j >= 0; j--) {
            result += check[j];
        }
        if (result == check) {
            console.log(('true'));
        } else {
            console.log('false');
        }
    }
}

palindromeNum([123, 323, 421, 121]);
/*
false
true
false
true
*/
console.log('-------------');
palindromeNum([32, 2, 232, 1010]);
/*
false
true
true
false
*/