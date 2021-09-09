function problem2(arr) {
    let line = arr.shift().split(' ')
    line.map(Number);

    for (task of arr) {
        let [command, num, num2] = task.split(' ');

        if (command == 'Finish') {
            break;
        }

        if (command == 'Add') {
            line.push(num)
        } else if (command == 'Remove') {
            if (line.includes(num) == true) {
                let trim = line.indexOf(num);
                line.splice(trim, 1);
            }
        } else if (command == 'Replace') {
            if (line.includes(num) == true) {
                let repl = line.indexOf(num);
                line[repl] = num2;
            }
        } else if (command == 'Collapse') {
            for (let n of line) {
                num = Number(num)
                line = line.filter((n) => n > num);
            }
        }
    }

    console.log(line.join(' '));
}


problem2(["1 4 5 19",
    "Add 1",
    "Remove 4",
    "Finish"]);
// 1 5 19 1

problem2(["1 20 -1 10",
    "Collapse 8",
    "Finish"]);
// 20 10

problem2(["5 9 70 -56 9 9",
    "Replace 9 10",
    "Remove 9",
    "Finish"]);
// 5 10 70 -56 9

