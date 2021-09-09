function sortByTwo(arr) {
    arr.sort((el1, el2) => {
        let criteria1 = el1.length - el2.length;
        let criteria2 = el1.localeCompare(el2);

        return criteria1 || criteria2;
    })

    console.log(arr.join('\n'));

}

sortByTwo(["alpha", "beta", "gamma"]);
/*
beta
alpha
gamma
*/

sortByTwo(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
/*
Jack
Isacc
George
Theodor
Harrison
*/
