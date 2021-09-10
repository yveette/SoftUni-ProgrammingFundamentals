function stringSubstring(find, text) {
    let words = text.split(' ');
    // if (find.toLocaleLowerCase() == word.toLocaleLowerCase())
    if (words.map(t => t.toLocaleLowerCase()).includes(find)) {
        return console.log(find);
    }
    console.log(`${find} not found!`);
}


stringSubstring('javascript',
    'JavaScript is the best programming language');
// javascript

stringSubstring('python',
    'JavaScript is the best programming language');
// python not found!
