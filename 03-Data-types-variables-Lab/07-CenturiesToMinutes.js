function centuriesToMin(num) {
    let years = num * 100;
    let days = Math.trunc(years * 365.2422);
    let hours = days * 24;
    let minutes = hours * 60;

    console.log(`${num} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);
}

centuriesToMin(1);
// ...52594560 minutes

centuriesToMin(5);
// 262974240 minutes