function houseParty(arr) {
    let guests = [];
    for (let command of arr) {
        let text = command.split(' ');
        if (!text.includes("not")) {
            if (guests.includes(text[0])) {
                console.log(`${text[0]} is already in the list!`);
            } else {
                guests.push(text[0]);
            }
        } else {
            if (guests.includes(text[0])) {
                guests.pop(text[0]);
            } else {
                console.log(`${text[0]} is not in the list!`)
            }
        }
    }
    console.log(guests.join('\n'));
}

houseParty(['Allie is going!','George is going!',
'John is not going!','George is not going!']);
/*
John is not in the list!
Allie
*/

houseParty(['Tom is going!','Annie is going!','Tom is going!',
'Garry is going!','Jerry is going!']);
/*
Tom is already in the list!
Tom
Annie
Garry
Jerry
*/
