function meetings(arr) {
    let schedule = {};

    for (let token of arr) {
        let [day, person] = token.split(' ');

        if (schedule.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            console.log(`Scheduled for ${day}`);
            schedule[day] = person;
        }
    }

    for (let key in schedule) {
        console.log(`${key} -> ${schedule[key]}`);
    }
}

meetings(['Monday Peter', 'Wednesday Bill',
    'Monday Tim', 'Friday Tim']);
/*
Scheduled for Monday
Scheduled for Wednesday
Conflict on Monday!
Scheduled for Friday
Monday -> Peter
Wednesday -> Bill
Friday -> Tim
*/