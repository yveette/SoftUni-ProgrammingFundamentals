function intOrFloat(a, b, c) {
    let result = a + b + c;
    let rounded = Math.round(result);

    if (result == rounded) {
        console.log(`${result}- Integer`);
    } else {
        console.log(`${result}- Float`);

    }
}

intOrFloat(9, 100, 1.1);
// 110.1 - Float

intOrFloat(100, 200, 303);
// 603 - Integer