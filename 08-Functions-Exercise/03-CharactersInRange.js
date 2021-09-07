function charRange(char1, char2) {
    char1 = char1.charCodeAt(0);
    char2 = char2.charCodeAt(0);

    let result = '';
    if (char1 > char2) {
        for (let i = char2 + 1; i < char1; i++) {
            result += String.fromCharCode(i) + ' ';
        }
    } else {
        for (let i = char1 + 1; i < char2; i++) {
            result += String.fromCharCode(i) + ' ';
        }
    }
    console.log(result);
}

charRange('a', 'd');
// b c

charRange('#', ':');
// $ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9

charRange('C', '#');
// $ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9 : ; < = > ? @ A B