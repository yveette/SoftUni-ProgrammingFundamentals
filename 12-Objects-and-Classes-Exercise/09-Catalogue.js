function catalogue(arr) {
    let items = [];
    for (let tokens of arr) {
        let token = tokens.split(' : ');
        let item = token[0];
        let price = Number(token[1]);

        let itemObject = {
            item,
            price,
        }
        items.push(itemObject);
    }

    let sortedItems = items.sort((a, b) => a.item.localeCompare(b.item));

    let labels = [];
    for (let i = 0; i < sortedItems.length; i++) {
        let label = sortedItems[i].item[0];
        if (!labels.includes(label)) {
            labels.push(label);
            console.log(label);
        }
        console.log(`  ${sortedItems[i].item}: ${sortedItems[i].price}`);
    }
}

catalogue(["Appricot : 20.4",
    "Fridge : 1500",
    "TV : 1499",
    "Deodorant : 10",
    "Boiler : 300",
    "Apple : 1.25",
    "Anti-Bug Spray : 15",
    "T-Shirt : 10"]);

/*
A
  Anti-Bug Spray: 15
  Apple: 1.25
  Appricot: 20.4
B
  Boiler: 300
D
  Deodorant: 10
F
  Fridge: 1500
T
  T-Shirt: 10
  TV: 1499
*/