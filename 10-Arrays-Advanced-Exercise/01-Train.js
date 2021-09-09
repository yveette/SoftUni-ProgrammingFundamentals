function trainSum(arr) {
    let train = arr.shift().split(' ').map(Number);
    let max = Number(arr.shift());

    for (let command of arr) {
        let current = command.split(' ');

        if (current[0] == "Add") {
            let passengers = Number(current[1]);
            train.push(passengers);
        } else {
            let passengers = Number(current[0]);
            for (let i = 0; i < train.length; i++) {
                if (train[i] + passengers <= max) {
                    train[i] += passengers;
                    break;
                }
            }
        }
    }
    console.log(train.join(' '));
}

trainSum(['32 54 21 12 4 0 23','75','Add 10','Add 0','30','10','75']);
// 72 54 21 12 4 75 23 10 0
trainSum(['0 0 0 10 2 4','10','Add 10','10','10','10','8','6']);
// 10 10 10 10 10 10 10
