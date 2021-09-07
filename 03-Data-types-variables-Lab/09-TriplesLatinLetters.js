function latin(n) {
    let a = "";
    let b = "";
    let c = "";
    let result = "";

    for (let i = 0; i < n; i++) {
        a += String.fromCharCode(97 + i);
        for (let j = 0; j < n; j++) {
            b += String.fromCharCode(97 + j);
            for (let k = 0; k < n; k++) {
                c += String.fromCharCode(97 + k);
                result = a + b + c;
                console.log(result);
                c = "";
            }
            b = "";
        }
        a = "";
    }
}

latin(3);
/*
aab
aac
aba
abb
abc
aca
acb
acc
baa
bab
...
*/