function login(arr) {
    // Takes first element and remove it from the array
    let username = arr.shift();
    // Makes new array with all letters
    let pass = username.split('');
    // Reverse elements of the array(letters)
    let passReversed = pass.reverse();
    // Join elements of the array into string
    let password = passReversed.join('');
    
    let count = 1;
    while (true) {
        let word = arr.shift();

        if (count == 4) {
            console.log(`User ${username} blocked!`);
            break;
        }

        if (word == password) {
            console.log(`User ${username} logged in.`);
            break;
        } else {
            console.log('Incorrect password. Try again.');
        }

        count++;
    }
}

login(['Acer', 'login', 'go', 'let me in', 'recA']);
login(['momo','omom']);
login(['sunny','rainy','cloudy','sunny','not sunny']);