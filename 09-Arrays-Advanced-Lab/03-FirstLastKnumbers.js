function firstAndLast(arr) {
    let k = arr.shift();

    let forward = [];
    for (let i = 0; i < k; i++) {
        forward.push(arr[i]);
    }
    let backward = [];
    for (let j = arr.length - k; j < arr.length; j++) {
        backward.push(arr[j]);
    }
    console.log(forward.join(' '));
    console.log(backward.join(' '));
}

firstAndLast([2, 7, 8, 9]); 
// 7 8
// 8 9
firstAndLast([3, 6, 7, 8, 9]); 
// 6 7 8
// 7 8 9 