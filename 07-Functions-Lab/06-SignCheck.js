function signCheck(a, b, c) {
    let result;
    if (a >= 0 && b >= 0 && c >= 0) {
        result = 'Positive';
    } else if (a < 0 && b < 0 && c < 0) {
        result = 'Negative';
    } else if (a < 0 && b < 0) {
        result = 'Positive';
    } else if (a < 0 && c < 0) {
        result = 'Positive';
    } else if (b < 0 && c < 0) {
        result = 'Positive';
    } else {
        result = 'Negative';
    }
    console.log(result);
}

signCheck(5, 12, -15); // Negative
signCheck(-6, -12, 14); // Positive
signCheck(-1, -2, -3); // Negative
signCheck(-5, 1, 1); // Negative