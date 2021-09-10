function piccolo(arr) {
    let parking = [];

    for (let token of arr) {
        let [action, number] = token.split(', ')
        if (action === 'IN') {
            if (!parking.includes(number)) {
                parking.push(number);
            }
        } else {
            if (parking.includes(number)) {
                parking.splice(parking.indexOf(number), 1);
            }
        }
    }

    let sorted = parking.sort((a, b) => a.localeCompare(b));

    if (parking.length > 0) {
        console.log(sorted.join('\n'));
    } else {
        console.log('Parking Lot is Empty');
    }
}

piccolo(['IN, CA2844AA', 'IN, CA1234TA',
    'OUT, CA2844AA', 'IN, CA9999TT', 'IN, CA2866HI', 'OUT, CA1234TA',
    'IN, CA2844AA', 'OUT, CA2866HI', 'IN, CA9876HH', 'IN, CA2822UU'])
/*
CA2822UU
CA2844AA
CA9876HH
CA9999TT
*/

piccolo(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'OUT, CA1234TA'])
// Parking Lot is Empty