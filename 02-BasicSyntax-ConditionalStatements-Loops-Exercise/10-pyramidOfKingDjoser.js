function pyramid(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let count = 0;
    let height = 0;

    while (base > 0) {
        count++;
        height += increment;
        let total = base * base * increment;
        let inside = (base - 2) * (base - 2) * increment;
        let outside = total - inside;

        if (base < 3) {
            gold += total;
        } else {
            stone += inside;
            if (count % 5 !== 0) {
                marble += outside;
            } else {
                lapis += outside;
            }
        }
        base -= 2;
    }
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);
}


pyramid(11, 1);
// Stone required: 165
// Marble required: 112
// Lapis Lazuli required: 8
// Gold required: 1
// Final pyramid height: 6

console.log('------');

pyramid(11, 0.75);
// Stone required: 124
// Marble required: 84
// Lapis Lazuli required: 6
// Gold required: 1
// Final pyramid height: 4

console.log('------');

pyramid(12, 1);
// Stone required: 220
// Marble required: 128
// Lapis Lazuli required: 12
// Gold required: 4
// Final pyramid height: 6

console.log('------');

pyramid(23, 0.5);
// Stone required: 886
// Marble required: 228
// Lapis Lazuli required: 36
// Gold required: 1
// Final pyramid height: 6
