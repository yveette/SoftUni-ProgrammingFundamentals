function problem3(arr) {
    let products = arr.shift().split('|');
    for (let task of arr) {
        if (task == "Shop!") {
            break;
        }
        let [command, product, product2] = task.split('%');

        if (command == "Important") {
            important(product);
        } else if (command == "Add") {
            add(product);
        } else if (command == "Swap") {
            swap(product,product2);
        } else if (command == "Remove") {
            remove(product)
        } else if (command == "Reversed") {
            products.reverse();
        }
    }

    let n = 1;
    for (let grocery of products) {
        console.log(`${n}. ${grocery}`)
        n++;
    }

    function important(product) {
        if (products.includes(product)) {
            let idx = products.indexOf(product);
            products.splice(idx, 1);
            products.unshift(product);
        } else {
            products.unshift(product);
        }
    }

    function add(product) {
        if (!products.includes(product)) {
            products.push(product);
        } else {
            console.log('The product is already in the list.')
        }
    }

    function swap(product, product2) {
        if (products.includes(product) && products.includes(product2)) {
            let idx = products.indexOf(product);
            let idx2 = products.indexOf(product2);
            let temp = products[idx];
            products[idx] = product2;
            products[idx2] = temp;
        } else {
            if (products.includes(product)) {
                console.log(`Product ${product2} missing!`)
            } else {
                console.log(`Product ${product} missing!`)
            }
        }
    }
    
    function remove(product) {
        if (products.includes(product)) {
            let idx = products.indexOf(product);
            products.splice(idx, 1);
        } else {
            console.log(`Product ${product} isn't in the list.`);
        }
    }
}

problem3(["eggs|milk|bread|fish",
    "Important%bread",
    "Swap%eggs%tomato",
    "Shop!"]);
/*
Product tomato missing!
1. bread
2. eggs
3. milk
4. fish
*/

problem3(["apple|cheese|salt|bananas",
    "Remove%cheese",
    "Swap%salt%bananas",
    "Shop!"]);
/*
1.	apple
2.	bananas
3.	salt
*/