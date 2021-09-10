function phoneBook(arr) {
    let bookObj = {};

    for (let token of arr) {
        let [name, number] = token.split(' ');
        bookObj[name] = number;
    }
    for (let key in bookObj) {
        console.log(`${key} -> ${bookObj[key]}`);
    }
}

phoneBook(['Tim 0834212554', 'Peter 0877547887',
    'Bill 0896543112', 'Tim 0876566344']);
// Tim -> 0876566344
// Peter -> 0877547887
// Bill -> 0896543112
