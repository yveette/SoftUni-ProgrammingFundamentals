function smallestTwo(arr) {
    arr.sort((a, b) => a - b);
    let result = arr.slice(0, 2);
    return result.join(' ');
}

console.log(smallestTwo([30, 15, 50, 5])); // 5 15
console.log(smallestTwo([3, 0, 10, 4, 7, 3])); // 0 3