function smallestNum(a, b, c) {
    if (a < b && a < c) {
        console.log(a);
    } else if (b < a && b < c) {
        console.log(b);
    } else {
        console.log(c);
    }
    // or Math.min(a,b,c)
}

smallestNum(2, 5, 3); // 2 
smallestNum(600, 342, 123); // 123 
smallestNum(25, 21, 4); // 4
smallestNum(3, 5, 3); // 3
