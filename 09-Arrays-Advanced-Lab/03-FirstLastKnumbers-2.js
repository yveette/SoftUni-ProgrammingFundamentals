function firstAndLast(arr) {
    let k = arr.shift();
    let forward = arr.slice(0, k);
    let backward = arr.slice(-k);

    console.log(forward.join(' '));
    console.log(backward.join(' '));
}