function solve(input) {
    let email = input.shift();

    let line = input.shift();
    while (line != "Complete") {
        command = line.split(' ')[0];

        if (line == "Make Upper") {
            email = email.toLocaleUpperCase();
            console.log(email);
        } else if (line == "Make Lower") {
            email = email.toLocaleLowerCase();
            console.log(email);
        } else if (command == "GetDomain") {
            let n = line.split(' ')[1];
            let domain = email.slice(-n,);
            console.log(domain);
        } else if (line == "GetUsername") {
            let index = email.indexOf('@');
            if (index != -1) {
                let name = email.substring(0, index);
                console.log(name)
            } else {
                console.log(`The email ${email} doesn't contain the @ symbol.`);
            }
        } else if (command == 'Replace') {
            let n = line.split(' ')[1];
            email = email.split(n).join('-');
            console.log(email);
        } else if (line == 'Encrypt') {
            let result = [];
            for (let el of email) {
                result.push(el.charCodeAt());
            }
            console.log(result.join(' '));
        }

        line = input.shift();
    }
}


solve(["Mike123@somemail.com",
    "Make Upper",
    "GetDomain 3",
    "GetUsername",
    "Encrypt",
    "Complete"]);
/*
MIKE123@SOMEMAIL.COM
COM
MIKE123
77 73 75 69 49 50 51 64 83 79 77 69 77 65 73 76 46 67 79 77
*/

    console.log('------');

solve(["AnotherMail.com",
    "Make Lower",
    "GetUsername",
    "Replace a",
    "Complete"]);
/*
anothermail.com
The email anothermail.com doesn't contain the @ symbol.
-notherm-il.com
*/