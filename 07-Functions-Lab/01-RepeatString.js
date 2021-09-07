function repeatString(word, n) {
    let result = '';
    for (let i = 0; i < n; i++) {
        result += word;
    }
    console.log(result);
}

repeatString('abc', 3);
// abcabcabc

repeatString('String', 2);
// StringString