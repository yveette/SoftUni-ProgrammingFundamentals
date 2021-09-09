function gladiatorInventory(arr) {
    let inventory = arr.shift().split(' ');
    arr.map(row => {
        let [command, item] = row.split(' ');

        if (command == "Buy") {
            if (!inventory.includes(item)) {
                inventory.push(item);
            }
        } else if (command == "Trash") {
            if (inventory.includes(item)) {
                let del = inventory.indexOf(item);
                inventory.splice(del, 1);
            }
        } else if (command == "Repair") {
            if (inventory.includes(item)) {
                let idx = inventory.indexOf(item);
                inventory.splice(idx, 1);
                inventory.push(item);
            }
        } else if (command == "Upgrade") {
            let exist = item.split('-');
            if (inventory.includes(exist[0])) {
                item = exist.join(':');
                let idx = inventory.indexOf(exist[0]);
                inventory.splice(idx + 1, 0, item);
            }
        }
    })
    console.log(inventory.join(' '));
}


gladiatorInventory(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield',
    'Repair Spear', 'Upgrade SWORD-Steel']);
    // SWORD SWORD:Steel Bag Spear

gladiatorInventory(['SWORD Shield Spear', 'Trash Bow',
    'Repair Shield', 'Upgrade Helmet-V']);
    // SWORD Spear Shield