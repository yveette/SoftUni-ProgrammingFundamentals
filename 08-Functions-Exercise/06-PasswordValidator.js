function passValid(password) {
    function isLengthBetweenSixAndTen(string) {
        if (string.length >= 6 && string.length <= 10) {
            return true;
        } else {
            return false;
        }
    }

    function isOnlyLettersAndDigits(string) {
        let result = true;
        for (let char of string) {
            let charCode = char.charCodeAt(0);
            if (!(charCode >= 48 && charCode <= 57) && !(charCode >= 65 && charCode <= 90) && !(charCode >= 97 && charCode <= 122)) {  // ако не е цифра от аски кода, нито малка или главна буква
                result = false;
            }
        }
        return result;
    }

    function hasAtLeastTwoDigits(string) {
        let count = 0;
        for (let char of string) {
            let charCode = char.charCodeAt(0);
            if (charCode >= 48 && charCode <= 57) {
                count++;
            }
        }

        return count >= 2;
    }

    let isLengthValid = isLengthBetweenSixAndTen(password);
    let containsLettersAndDigits = isOnlyLettersAndDigits(password);
    let containsAtLeastTwoDigits = hasAtLeastTwoDigits(password);

    if (isLengthValid && containsLettersAndDigits && containsAtLeastTwoDigits) {
        console.log('Password is valid');
    }

    if (!isLengthValid) {
        console.log("Password must be between 6 and 10 characters");
    }

    if (!containsLettersAndDigits) {
        console.log("Password must consist only of letters and digits");
    }

    if (!containsAtLeastTwoDigits) {
        console.log("Password must have at least 2 digits");
    }
}

passValid('logIn');
// Password must be between 6 and 10 characters
// Password must have at least 2 digits

passValid('MyPass123');
// Password is valid

passValid('Pa$s$s');
// Password must consist only of letters and digits
// Password must have at least 2 digits

passValid('P');
// Password must be between 6 and 10 characters
// Password must have at least 2 digits