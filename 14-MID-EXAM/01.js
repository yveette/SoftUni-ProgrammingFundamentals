function problem1(arr) {
    arr.map(Number);
    let[budget,students, flourPr, eggsPr, apronPr]= [...arr];

    let apronTotal = Math.ceil(students * 1.2) * apronPr;
    let eggsTotal = (eggsPr * 10) * students;

    let flour = students;
    for (let i = 5; i <= students; i += 5) {
        flour -= 1;
    }
    let flourTotal = flour * flourPr;

    let total = (apronTotal + eggsTotal + flourTotal).toFixed(2);

    if (budget >= total) {
        console.log(`Items purchased for ${total}$.`);
    } else {
        console.log(`${(total - budget).toFixed(2)}$ more needed.`);
    }
}

problem1([50, 2, 1.0, 0.10, 10.0]);
// Items purchased for 34.00$.

problem1([100, 25, 4.0, 1.0, 6.0]);
// 410.00$ more needed.

problem1([40, 2, 1.0, 0.10, 10.0]);
// Items purchased for 34.00$.