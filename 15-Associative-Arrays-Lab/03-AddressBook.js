function addressBook(arr) {
    let bookObj = {};

    for (let token of arr) {
        let [name, address] = token.split(':');
        bookObj[name] = address;
    }

    let sorted = Object.entries(bookObj);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));

    let sortedObj = {};
    for (let token of sorted) {
        let [name, address] = [...token];
        sortedObj[name] = address;
    }

    for (let key in sortedObj) {
        console.log(`${key} -> ${sortedObj[key]}`);
    }
}

addressBook(['Tim:Doe Crossing', 'Bill:Nelson Place',
    'Peter:Carlyle Ave', 'Bill:Ornery Rd']);
// Bill -> Ornery Rd
// Peter -> Carlyle Ave
// Tim -> Doe Crossing
    
