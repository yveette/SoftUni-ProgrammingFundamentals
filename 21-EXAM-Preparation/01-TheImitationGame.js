function imitationGame(input) {
    let encrypt = input.shift();
    let command = input.shift();

    while (command != 'Decode') {
        let task = command.split('|');
        let token = task.shift();
        switch (token) {
            case 'Move':
                move(task);
                break;
            case 'Insert':
                insert(task);
                break;
            case 'ChangeAll':
                changeAll(task);
                break;
        }
        command = input.shift();
    }

    console.log('The decrypted message is: ' + encrypt);

    function move(task) {
        let index = Number(task[0]);
        let moved = encrypt.slice(0, index);
        let old = encrypt.slice(index,);
        encrypt = old + moved;
    }
    function insert(task) {

        let index = Number(task[0]);
        let symbol = task[1];

        let start = encrypt.slice(0, index);
        let end = encrypt.slice(index,);
        encrypt = start + symbol + end;
    }
    function changeAll(task) {
        let take = task[0];
        let change = task[1];
        let result = '';

        //split(old) and join(new)

        for (let i = 0; i < encrypt.length; i++) {
            if (encrypt[i] == take) {
                result += encrypt[i].replace(encrypt[i], change);
            } else {
                result += encrypt[i];
            }
        }
        encrypt = result;
    }
}

imitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
]);
// The decrypted message is: Hello

imitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
]);
// The decrypted message is: howareyou?