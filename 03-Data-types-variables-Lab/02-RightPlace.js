function replace(str, char, matched) {
    let check = '';

    for (let i = 0; i < str.length; i++) {
        if (str[i] == "_") {
            check += char;
        } else {
            check += str[i];
        }
    }

    if (check === matched) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}

replace('Str_ng', 'I', 'Strong');
// Not Matched

replace('Str_ng', 'i', 'String');
// Matched