function adAstra(input) {
    let pattern = /(#|\|)(?<item>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g;
    let match = pattern.exec(input);

    let items = [];
    let dates = [];
    let caloriesAll = [];

    let totalCalories = 0;

    while (match != null) {
        items.push(match.groups.item);
        dates.push(match.groups.date);
        caloriesAll.push(match.groups.calories);
        let calories = Number(match.groups.calories);
        totalCalories += calories;
        match = pattern.exec(input);
    }

    if (totalCalories >= 2000) {
        let result = Math.floor(totalCalories / 2000);
        console.log(`You have food to last you for: ${result} days!`);
    } else {
        console.log('You have food to last you for: 0 days!');
    }

    for (let i = 0; i < items.length; i++) {
        console.log(`Item: ${items[i]}, Best before: ${dates[i]}, Nutrition: ${caloriesAll[i]}`);
    }
}

adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);
/*
You have food to last you for: 2 days!
Item: Bread, Best before: 19/03/21, Nutrition: 4000
Item: Apples, Best before: 08/10/20, Nutrition: 200
Item: Carrots, Best before: 06/08/20, Nutrition: 500
*/

adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);
/*
You have food to last you for: 9 days!
Item: Fish, Best before: 24/12/20, Nutrition: 8500
Item: Ice Cream, Best before: 03/10/21, Nutrition: 9000
Item: Milk, Best before: 05/09/20, Nutrition: 2000
*/

adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@']);
/*
You have food to last you for: 0 days!
*/