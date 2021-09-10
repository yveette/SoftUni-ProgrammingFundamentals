function imitationGame(input) {
    let encrypt = input.shift();
    let command = input.shift();

    while (command != 'Decode') {
        let task = command.split('|');
        let token = task.shift();

        if (token == 'Move') {
            move(task);
        } else if (token == 'Insert') {
            insert(task);
        } else if (token == 'ChangeAll') {
            changeAll(task);
        }
        command = input.shift();
    }

    console.log('The decrypted message is: ' + encrypt);

    function move(task) {
        let index = Number(task[0]);
        let moved = encrypt.substring(0, index);
        let old = encrypt.substring(index,);
        encrypt = old + moved;
    }
    function insert(task) {
        let index = Number(task[0]);
        let symbol = task[1];

        let start = encrypt.substring(0, index);
        let end = encrypt.substring(index,);
        encrypt = start + symbol + end;
    }
    function changeAll(task) {
        let take = task[0];
        let change = task[1];
        encrypt = encrypt.split(take).join(change);
    }
    //split(old) and join(new)
}


imitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
]);
imitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
]);
