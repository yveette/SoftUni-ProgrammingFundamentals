function storeProvision(currents, products) {
    let store = [];

    for (let i = 0; i < currents.length - 1; i += 2) {
        let product = currents[i];
        let quantity = Number(currents[i + 1]);

        let productObject = {
            product,
            quantity,
        }

        store.push(productObject);
    }

    for (let i = 0; i < products.length - 1; i += 2) {
        let product = products[i];
        let quantity = Number(products[i + 1]);

        let productObject = {
            product,
            quantity,
        }

        let indexPr = store.findIndex(x => x.product === product);

        if (indexPr === -1) {     //product does not exist
            store.push(productObject);
        } else {        //product  exists
            store[indexPr].quantity += quantity;
        }
    }

    for (let product of store) {
        console.log(`${product.product} -> ${product.quantity}`);
    }
}

storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);
/*
Chips -> 5
CocaCola -> 9
Bananas -> 44
Pasta -> 11
Beer -> 2
Flour -> 44
Oil -> 12
Tomatoes -> 70
*/