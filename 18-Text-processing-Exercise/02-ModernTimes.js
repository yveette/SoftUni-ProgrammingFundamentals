function modernTimes(text) {
    let strings = text.split(' ');
    let result = [];

    for (let token of strings) {
        if (token.charAt(0) == '#' && token.length > 1) {
            let valid = true;
            for (let char of token.substring(1)) {
                let code = char.charCodeAt(0);
                if ((code < 65 || code > 122) || (code >= 91 && code <= 96)) {
                    valid = false;
                    break;
                }
            }
            if (valid) {
                result.push(token.substring(1));
            }
        }
    }

    console.log(result.join('\n'));
}

modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');
// special
// socialMedia