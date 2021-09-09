function productList(arr) {
    arr.sort((a, b) => a.localeCompare(b));
    for (let i = 0; i < arr.length; i++) {
        console.log(`${i + 1}.${arr[i]}`);
    }
}

productList(["Potatoes", "Tomatoes", "Onions", "Apples"]);
/*
1.Apples
2.Onions
3.Potatoes
4.Tomatoes
*/