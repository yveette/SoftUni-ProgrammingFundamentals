function buildWall(arr) {
    let days = 0;
    // arr = arr.map(x => Number(x));
    let crew = arr.length;

    let total = [];
    while (crew !== 0) {
        for (let i = 0; i < arr.length; i++) {
            let current = Number(arr[i]);
            if (current < 30) {
                let position = arr.indexOf(current);
                let item = current + 1;
                arr.splice(position, 1, item);
                days += 1;
            }
        }

        total.push(days * 195);
        days = 0;

        if (arr.every(x => x == 30)) {
            console.log(total.join(', '));
            let sum = 0;
            for (let el of total) {
                sum += el;
            }
            console.log(`${sum * 1900} pesos`);
            break;
        }
    }
}

buildWall([21, 25, 28]);
/*
585, 585, 390, 390, 390, 195, 195, 195, 195 
5928000 pesos
*/

buildWall([17]);
/*
195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195 
4816500 pesos 
*/

buildWall([17, 22, 17, 19, 17]);
/*
975, 975, 975, 975, 975, 975, 975, 975, 780, 780, 780, 585, 585 
21489000 pesos 
*/