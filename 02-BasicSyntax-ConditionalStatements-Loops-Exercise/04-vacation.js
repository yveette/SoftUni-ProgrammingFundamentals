function vacation(people, type, day) {
    let price = 0;
    switch (type) {
        case "Students":
            switch (day) {
                case "Friday":
                    price = 8.45 * people;
                    break;
                case "Saturday":
                    price = 9.80 * people;
                    break;
                case "Sunday":
                    price = 10.46 * people;
                    break;
            }

            if (people >= 30) {
                price = price * 0.85;
            }
            break;
        case "Business":
            switch (day) {
                case "Friday":
                    price = 10.90;
                    break;
                case "Saturday":
                    price = 15.60;
                    break;
                case "Sunday":
                    price = 16.00;
                    break;
            }

            if (people >= 100) {
                people -= 10;
                price = price * people;
            } else {
                price = price * people;
            }
            break;
        case "Regular":
            switch (day) {
                case "Friday":
                    price = 15.00 * people;
                    break;
                case "Saturday":
                    price = 20.00 * people;
                    break;
                case "Sunday":
                    price = 22.50 * people;
                    break;
            }

            if (people >= 10 && people <= 20) {
                price = price * 0.95;
            }
            break;
    }
    console.log(`Total price: ${price.toFixed(2)}`);
}

vacation(30, "Students", "Sunday");
//Total price: 266.73
vacation(40, "Regular", "Saturday");
//Total price: 800.00