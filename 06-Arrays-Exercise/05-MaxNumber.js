function maxNum(arr) {
    // Write a function to find all the top integers in an array. 
    // A top integer is an integer which is bigger than all the elements to its right. 

    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        let top = true;

        for (let j = i + 1; j < arr.length; j++) {
            let rightNum = arr[j];

            if (rightNum >= current) {
                top = false;
                break;
            }
        }

        if (top) {
            newArr.push(current);
        }
    }
    console.log(newArr.join(' '));
}

maxNum([1, 4, 3, 2]);
// 4 3 2

maxNum([14, 24, 3, 19, 15, 17]);
// 24 19 17

maxNum([41, 41, 34, 20]);
// 41 34 20

maxNum([27, 19, 42, 2, 13, 45, 48]);
// 48