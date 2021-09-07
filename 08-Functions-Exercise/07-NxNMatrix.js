function nXnMatrix(n) {
    let result = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            result += n + ' ';
        }
        console.log(result);
        result = '';
    }
}

nXnMatrix(3);
/*
3 3 3
3 3 3
3 3 3
*/
nXnMatrix(7);
nXnMatrix(2);