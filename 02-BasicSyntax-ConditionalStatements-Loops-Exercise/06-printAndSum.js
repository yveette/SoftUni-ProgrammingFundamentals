function printSum(start, end) {
    let numbers = "";
    let sum = 0;

    for (let i = start; i <= end; i++) {
        numbers += i + " "
        sum += i;
    }
    console.log(numbers);
    console.log(`Sum: ${sum}`);
}

printSum(5, 10); // Sum: 45
printSum(0, 26); // Sum: 351
printSum(50, 60); // Sum: 605