function special(n) {
    // 1 to n - numbers
    // A number is special when its sum of digits is 5, 7 or 11.

    for (let i = 1; i <= n; i++) {
        let check = i.toString();
        let sum = 0;

        for (let j = 0; j < check.length; j++) {
            sum += Number(check[j]);
        }

        let isTrue = false;

        if (sum == 5 || sum == 7 || sum == 11) {
            isTrue = true;
        }

        console.log(`${i} -> ${isTrue ? 'True' : 'False'}`);
    }
}

special(15);
/*
1 -> False
2 -> False
3 -> False
4 -> False
5 -> True
6 -> False
7 -> True
8 -> False
9 -> False
10 -> False
11 -> False
12 -> False
13 -> False
14 -> True
15 -> False
*/