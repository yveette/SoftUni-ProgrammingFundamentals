function searchNum(arr1, arr2) {
    let take = arr2[0];
    let delCount = arr2[1];
    let search = arr2[2];

    let newArr = arr1.slice(0, take);
    newArr.splice(0, delCount);
    let count = 0;
    for (let el of newArr) {
        if (el == search) {
            count += 1;
        }
    }
    console.log(`Number ${search} occurs ${count} times.`)
}

searchNum([5, 2, 3, 4, 1, 6], [5, 2, 3]);
// Number 3 occurs 1 times.