function spiceFlow(everyDay) {
    let day = 0;
    let total = 0;
    while (everyDay >= 100) {
        day += 1;
        total += everyDay - 26;
        everyDay -= 10;
        if (everyDay < 100) {
            total -= 26;
            break;
        }
    }
    console.log(day);
    console.log(total);
}

spiceFlow(111);
// 2-134

spiceFlow(450);
// 36-8938

spiceFlow(200);
//11-1338