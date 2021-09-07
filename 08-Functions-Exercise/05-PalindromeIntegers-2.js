function palindr(list) {
    for (let num of list) {
        let numStr = num.toString();
        let reversed = numStr.split('').reverse().join('');

        if (numStr == reversed) {
            console.log('true');
        } else {
            console.log("false");
        }
    }
}