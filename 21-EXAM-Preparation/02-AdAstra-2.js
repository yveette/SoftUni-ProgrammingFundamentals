function adAstra(input) {
    let pattern = /(#|\|)([A-Za-z\s]+)\1(\d{2}\/\d{2}\/\d{2})\1(\d+)\1/g;
    let match = pattern.exec(input);

    let total = 0;
    let result = [];

    while (match != null) {
        let name = match[2];
        let date = match[3];
        let calories = Number(match[4]);

        total += calories;
        result.push(`Item: ${name}, Best before: ${date}, Nutrition: ${calories}`);

        match = pattern.exec(input);
    }

    let days = Math.floor(total / 2000);
    console.log(`You have food to last you for: ${days} days!`)

    for (let el of result) {
        console.log(el);
    }
}

adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);
adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);
adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@']);
