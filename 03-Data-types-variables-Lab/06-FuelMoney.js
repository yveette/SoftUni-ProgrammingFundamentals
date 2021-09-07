function fuel(distance, passangers, price) {
    let wanted = (distance / 100) * 7;
    wanted += passangers * 0.1;
    let total = wanted * price;
    console.log(`Needed money for that trip is ${total}lv.`);
}

fuel(260, 9, 2.49);
// Needed money for that trip is 47.559lv.

fuel(90, 14, 2.88);
// Needed money for that trip is 22.176lv.