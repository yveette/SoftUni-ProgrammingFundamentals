function reversed(arr) {
    for (let i = 0; i < (arr.length - 1) / 2; i++) {
        let a = (arr.length - 1) - i;
        let b = arr[i];
        arr[i] = arr[a];
        arr[a] = b;
    }
    console.log(arr.join(' '));
}

// or

function reversed(arr) {
    let result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    console.log(result.join(' '));
}

reversed(['a', 'b', 'c', 'd', 'e']);
reversed(['abc', 'def', 'hig', 'klm', 'nop']);
reversed(['33', '123', '0', 'dd']);