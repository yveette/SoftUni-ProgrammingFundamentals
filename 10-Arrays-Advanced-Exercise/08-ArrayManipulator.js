function arrManipulator(numbers, commands) {
    for (let command of commands) {
        let tokens = command.split(' ');
        if (tokens[0] == 'add') {
            // add - index - number
            let idx = Number(tokens[1]);
            let element = Number(tokens[2]);
            numbers.splice(idx, 0, element);
        } else if (tokens[0] == 'addMany') {
            //add - index - numbers
            let idx1 = Number(tokens[1]);
            tokens.splice(0, 2);
            let addNums = tokens.map(Number);
            numbers.splice(idx1, 0, ...addNums);
        } else if (tokens[0] == 'contains') {
            // contains num - print (index of num) or (-1) for not found
            let result = numbers.indexOf(Number(tokens[1]));
            console.log(result);
        } else if (tokens[0] == 'remove') {
            // remove el of index
            let idx2 = Number(tokens[1]);
            numbers.splice(idx2, 1);
        } else if (tokens[0] == 'shift') {
            // shift = times to put number at the end
            let times = Number(tokens[1]);
            for (let i = 0; i < times; i++) {
                numbers.push(numbers.shift());
            }
        } else if (tokens[0] == 'sumPairs') {
            // sum pair, if not found pair -> place the num
            let sumArr = [];
            if (numbers.length % 2 !== 0) {
                numbers.push(0);
            }
            for (let i = 0; i < numbers.length - 1; i += 2) {
                let add = numbers[i] + numbers[i + 1];
                sumArr.push(add);
            }
            numbers = sumArr;
        } else if (tokens[0] == 'print') {
            console.log(`[ ${numbers.join(', ')} ]`);
            return;
        }
    }
}

arrManipulator([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print']);
/*
0
-1
[ 1, 8, 2, 4, 5, 6, 7 ]
*/

arrManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);
/*
-1
[ 2, 3, 5, 9, 8, 7, 6, 5, 1 ]
*/