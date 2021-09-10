function softUniBar(input) {
    let pattern = /%([A-Z][a-z]*)%.*?<(\w+)>.*?\|(\d+)\|.*?(-?\d+(?:\.\d+)?)\$/g;

    let total = 0;
    while (input[0] != 'end of shift') {
        let line = input.shift();

        let match = pattern.exec(line);

        if (match != null) {
            let [_, name, product, count, price] = match;
            count = Number(count);
            price = Number(price);

            total += count * price;

            console.log(`${name}: ${product} - ${(count * price).toFixed(2)}`)
        }
        match = pattern.exec(line);
    }
    console.log('Total income: ' + total.toFixed(2));
}

softUniBar(["%George%<Croissant>|2|10.3$",
    "%Peter%<Gum>|1|1.3$",
    "%Maria%<Cola>|1|2.4$",
    "end of shift"]);
/*
George: Croissant - 20.60
Peter: Gum - 1.30
Maria: Cola - 2.40
Total income: 24.30
*/

softUniBar(["%InvalidName%<Croissant>|2|10.3$",
    "%Peter%<Gum>1.3$",
    "%Maria%<Cola>|1|2.4",
    "%Valid%<Valid>valid|10|valid20$",
    "end of shift"]);
/*
Valid: Valid - 200.00
Total income: 200.00
*/