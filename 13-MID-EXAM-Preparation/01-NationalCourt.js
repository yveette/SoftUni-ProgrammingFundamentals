/*
function nationalCourt(arr) {
    let empl1 = Number(arr[0]);
    let empl2 = Number(arr[1]);
    let empl3 = Number(arr[2]);

    let all = Number(arr[3]);
    let people = empl1 + empl2 + empl3;
    let hours = 0;

    while (all > 0) {
        hours++;
        if (hours % 4 !== 0) {
            all -= people
        }
    }

    console.log(`Time needed: ${hours}h.`);
}
*/



function nationalCourt(arr) {
    let [empl1, empl2, empl3, all] = arr.map(Number);
    let people = empl1 + empl2 + empl3;

    let required = Math.ceil(all / people);
    let pause = Math.floor(required / 3);
    if (required % 3 == 0) {
        pause -= 1;
    }

    console.log(`Time needed: ${required + pause}h.`);
}

nationalCourt(["5", "6", "4", "20"]);
// Time needed: 2h.

nationalCourt(["1", "2", "3", "45"]);
// Time needed: 10h.

nationalCourt(["3", "2", "5", "40"]);
// Time needed: 5h.

nationalCourt(["5", "6", "4", "0"]);
// Time needed: -1h.

nationalCourt(["1", "0", "0", "3"]);
// Time needed: 3h.

nationalCourt(["1", "0", "0", "9"]);
// Time needed: 11h.