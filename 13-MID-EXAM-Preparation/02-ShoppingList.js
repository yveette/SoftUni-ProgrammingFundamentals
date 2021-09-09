function shoppingList(arr) {
    let list = arr.shift().split('!');
    for (let task of arr) {
        let [command, product, product2] = task.split(' ');
        if (command == "Go") {
            break;
        } else if (command == 'Urgent') {
            if (!list.includes(product)) {
                list.unshift(product);
            }
        } else if (command == 'Unnecessary') {
            if (list.includes(product)) {
                list.splice(list.indexOf(product), 1);
            }
        } else if (command == 'Correct') {
            if (list.includes(product)) {
                list.splice(list.indexOf(product), 1, product2);
            }
        } else if (command == 'Rearrange') {
            if (list.includes(product)) {
                list.splice(list.indexOf(product), 1);
                list.push(product);
            }
        }
    }

    console.log(list.join(', '));
}

// shopingList(["Tomatoes!Potatoes!Bread", "Unnecessary Milk", "Urgent Tomatoes", 'Go Shopping!']);
// shopingList(["Milk!Pepper!Salt!Water!Banana",
//     "Urgent Salt",
//     "Unnecessary Grapes",
//     "Correct Pepper Onion",
//     "Rearrange Grapes",
//     "Correct Tomatoes Potatoes",
//     "Go Shopping!"
// ]);


// other way 

function shoppingList(input) {
    let groceries = input.shift().split('!');

    let text = input.shift();
    while (text != "Go Shopping!") {
        let [command, item, newItem] = text.split(' ');
        switch (command) {
            case 'Urgent':
                urgent(groceries, item);
                break;
            case 'Unnecessary':
                unnecessary(groceries, item);
                break;
            case 'Correct':
                correct(groceries, item, newItem)
                break;
            case 'Rearrange':
                rearrange(groceries, item);
                break;
        }

        text = input.shift();
    }
    console.log(groceries.join(', '));

    function urgent(list, item) {
        if (!list.includes(item)) {
            list.unshift(item);
        }
    }
    function unnecessary(list, item) {
        if (list.includes(item)) {
            let index = list.indexOf(item);
            list.splice(index, 1);
        }
    }
    function correct(list, item, newItem) {
        if (list.includes(item)) {
            let index = list.indexOf(item);
            list[index] = newItem;
        }
    }
    function rearrange(list, item) {
        if (list.includes(item)) {
            let index = list.indexOf(item);
            list.splice(index, 1);
            list.push(item);
        }
    }
}

shoppingList(["Tomatoes!Potatoes!Bread", "Unnecessary Milk", "Urgent Tomatoes", 'Go Shopping!']);
// Tomatoes, Potatoes, Bread

shoppingList(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"]);
// Milk, Onion, Salt, Water, Banana