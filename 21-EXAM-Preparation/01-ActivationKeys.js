function activationKey(input) {
    let raw = input.shift();
    let line = input.shift();

    while (line != "Generate") {
        let all = line.split('>>>');
        let command = all.shift();

        if (command == "Contains") {
            let find = all;
            if (raw.includes(find)) {
                console.log(`${raw} contains ${find}`);
            } else {
                console.log('Substring not found!');
            }
        }

        if (command == "Flip") {
            let task = all[0];
            let startIndex = all[1];
            let endIndex = all[2];

            let left = raw.substring(0, startIndex);
            let change = raw.substring(startIndex, endIndex);
            let right = raw.substring(endIndex,);

            if (task == 'Upper') {
                change = change.toUpperCase();
                // .toLocaleUpperCase - for bulgarian alphabet
            } else {
                change = change.toLowerCase();
                // .toLocaleLowerCase - for bulgarian alphabet
            }

            raw = left + change + right;
            console.log(raw);
        }

        if (command == "Slice") {
            let startIndex = all[0];
            let endIndex = all[1];

            let left = raw.substring(0, startIndex);
            let right = raw.substring(endIndex,);

            raw = left + right;
            console.log(raw);
        }

        line = input.shift();
    }

    console.log(`Your activation key is: ${raw}`);
}



activationKey(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"]);
/*
abghijklmnopqrstuvwxyz
abgHIJKLMNOPQRstuvwxyz
abgHIjkLMNOPQRstuvwxyz
Substring not found!
Substring not found!
Your activation key is: abgHIjkLMNOPQRstuvwxyz
*/

console.log('-----');

activationKey(["134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"]);
/*
134sf5ftuni2020rockz42
Substring not found!
Substring not found!
Substring not found!
134SF5FTuni2020rockz42
134SF5ftuni2020rockz42
Your activation key is: 134SF5ftuni2020rockz42
*/