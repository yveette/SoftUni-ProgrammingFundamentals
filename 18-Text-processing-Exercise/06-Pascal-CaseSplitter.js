
function pascalCase(text) {
    let result = text[0];
    let lowerText = text.toLocaleLowerCase();
    // or
    // if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90)

    for (let i = 1; i < text.length; i++) {
        if (text[i] != lowerText[i]) {
            result += ", ";
        }
        result += text[i];
    }
    console.log(result);
}

pascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan');
// Split, Me, If, You, Can, Ha, Ha, You, Cant, Or, You, Can

pascalCase('HoldTheDoor');
// Hold, The, Door

pascalCase('ThisIsSoAnnoyingToDo');
// This, Is, So, Annoying, To, Do