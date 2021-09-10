function countStrings(text, find) {
    console.log(text.split(' ').filter(x => x == find).length);
}

countStrings("This is a word and it also is a sentence", "is");
// 2