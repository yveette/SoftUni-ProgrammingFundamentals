function solve(input) {
    let n = input.shift();
    let pattern = /(\*|@)[A-Z][a-z]{2,}\1: (\[[A-Za-z]\]\|){3}$/

    for (let i = 0; i < n; i++) {
        let line = input.shift();

        let match = pattern.exec(line);
        if (match == null) {
            console.log(`Valid message not found!`);
        } else {
            let result = match[0];
            let [name, token] = result.split(' ');
            name = name.slice(1, -2);
            let [one, two, three] = token.split('|');
            one = one.slice(1, -1).charCodeAt();
            two = two.slice(1, -1).charCodeAt();
            three = three.slice(1, -1).charCodeAt();
            console.log(`${name}: ${one} ${two} ${three}`);
        }
    }
}

solve(["3",
    "*Request*: [I]|[s]|[i]|",
    "*Taggy@: [73]|[73]|[73]|",
    "Should be valid @Taggy@: [v]|[a]|[l]|"]);
/*
Request: 73 115 105
Valid message not found!
Taggy: 118 97 108
*/

console.log('----')

solve(["3",
    "@Taggy@: [i]|[n]|[v]|[a]|[l]|[i]|[d]| this shouldn’t be valid",
    "*tAGged*: [i][i][i]|",
    "Should be invalid @Taggy@: [v]|[a]|[l]|[l]|[l]|"]);
/*
Valid message not found!
Valid message not found!
Valid message not found!
*/