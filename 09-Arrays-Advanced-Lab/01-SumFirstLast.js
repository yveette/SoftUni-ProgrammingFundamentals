function sumFirstAndLast(arrStr) {
    let first = Number(arrStr.shift());
    let last = Number(arrStr.pop());

    return first + last;
}

console.log(sumFirstAndLast(['5', '15'])); // 20
console.log(sumFirstAndLast(['20', '30', '40'])); // 60
console.log(sumFirstAndLast(['5', '10'])); // 15
console.log(sumFirstAndLast(['3'])); // NaN