function bitcoin(arr) {
    let bitcoin = 11949.16;
    let gold = 67.51;

    countDay = 1;
    money = 0;
    let budget = 0;
    let coins = 0;

    let day = arr.shift();
    let buy = false;
    let buyCoin = 0;

    while (day != undefined) {
        let now = 0;

        if (countDay % 3 == 0) {
            now = 0.7 * day;
        } else {
            now = day;
        }

        let sum = (now * gold);
        budget += sum;

        while (budget > bitcoin) {
            budget = (budget - bitcoin);
            coins++;
            buy = true;

            if (coins == 1) {
                buyCoin = countDay;
            }
        }
        day = arr.shift();
        countDay++;
    }

    console.log(`Bought bitcoins: ${coins}`);

    if (buy == true) {
        console.log(`Day of the first purchased bitcoin: ${buyCoin}`);
    }

    console.log(`Left money: ${budget.toFixed(2)} lv.`);
}

bitcoin([100, 200, 300]);
// Bought bitcoins: 2
// Day of the first purchased bitcoin: 2
// Left money: 10531.78 lv.

bitcoin([50, 100]);
// Bought bitcoins: 0
// Money left: 10126.50 lv.

bitcoin([3124.15, 504.212, 2511.124]);
// Bought bitcoins: 30
// Day of the first purchased bitcoin: 1
// Money left: 5144.11 lv.
