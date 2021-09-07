function amazingNum(num) {
    // An amazing number is one that includes the digit 9 the sum of its digits. 
    let numStr = num.toString();
    let result = 0;

    for (let i = 0; i < numStr.length; i++) {
        let current = Number(numStr[i]);
        result += current;
    }

    let resultStr = result.toString();
    let nine = false;

    for (let j = 0; j < resultStr.length; j++) {
        if (resultStr[j] == '9') {
            nine = true;
            break;
        }
    }
    console.log(`${num} Amazing? ${nine ? 'True' : 'False'}`)
}

amazingNum(1233);
// 1233 Amazing? True

amazingNum(999);
// 999 Amazing? False