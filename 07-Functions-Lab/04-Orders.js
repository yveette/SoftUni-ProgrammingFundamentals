function orders(product, count) {
    let total = 0;

    switch (product) {
        case 'coffee':
        total = count * 1.5;
            break;
        case 'water':
            total = count * 1.0;
            break;
        case "coke":
            total = count * 1.4;
            break;
        case "snacks":
            total = count * 2;
            break;
    }
    console.log(total.toFixed(2));
}

orders("water",5); // 5.00
orders("coffee",2); // 3.00