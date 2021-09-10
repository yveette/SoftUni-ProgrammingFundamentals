function hardWords(arr) {
    let words = arr.pop();
    let letter = arr[0].split(' ');

    let result = '';

    for (let token of letter) {
        if (token.charAt(0) == '_') {
            let changeComa = false;
            let changeDot = false;
            if (token.endsWith(',')) {
                changeComa = true;
                token = token.substring(0, token.length - 1);
            }
            if (token.endsWith('.')) {
                changeDot = true;
                token = token.substring(0, token.length - 1);
            }


            for (let word of words) {
                if (token.length == ('_'.repeat(word.length)).length) {
                    if (changeComa) {
                        word += ','
                    } else if (changeDot) {
                        word += '.'
                    }
                    result += word;
                    result += ' ';
                    break;
                }
            }
        } else {
            result += token;
            result += ' ';
        }
    }

    console.log(result);
}

hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);
/*
Hi, grandma! I'm so glad to write to you. During the winter vacation, so amazing things happened. My dad bought me a sled. Mom started a new job as a pharmacist. My brother's ankle is sprained, and now it bothers me even more. Every night Mom cooks pie on your recipe because it is the most delicious. I hope this year Santa will bring me a robot.
*/