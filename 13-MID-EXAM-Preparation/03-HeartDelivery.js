function heartDelivery(arr) {
    let houses = arr.shift().split('@').map(Number);
    let index = 0;

    for (let text of arr) {
        if (text == 'Love!') {
            break;
        }

        let jump = Number(text.split(' ')[1]);
        index += jump;
        if (index >= houses.length) {
            index = 0;
        }

        if (houses[index] == 0) {
            console.log(`Place ${index} already had Valentine's day.`);
        } else {
            houses[index] -= 2;
            if (houses[index] == 0) {
                console.log(`Place ${index} has Valentine's day.`);
            }
        }
    }

    console.log(`Cupid's last position was ${index}.`);
    let missed = houses.filter(x => x > 0).length; // new array with every x>0
    if (missed == 0) {
        console.log("Mission was successful.");
    } else {
        console.log(`Cupid has failed ${missed} places.`);
    }
}

heartDelivery(["10@10@10@2", "Jump 1", "Jump 2", "Love!"]);
/*
Place 3 has Valentine's day.
Cupid's last position was 3.
Cupid has failed 3 places.
*/

heartDelivery(["2@4@2", "Jump 2", "Jump 2", "Jump 8", "Jump 3", "Jump 1", "Love!"]);
/*
Place 2 has Valentine's day.
Place 0 has Valentine's day.
Place 0 already had Valentine's day.
Place 0 already had Valentine's day.
Cupid's last position was 1.
Cupid has failed 1 places.
*/