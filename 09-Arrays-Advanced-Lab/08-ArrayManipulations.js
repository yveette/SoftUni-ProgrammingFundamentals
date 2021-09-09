function manipulationsArr(commands) {
    let arr = commands
        .shift()
        .split(' ')
        .map(Number);

    for (let i = 0; i < commands.length; i++) {
        let [command, first, second] = commands[i].split(' ');

        switch (command) {
            case "Add":
                add(first);
                break;
            case "Remove":
                remove(first)
                break;
            case "RemoveAt":
                removeAt(first);
                break;
            case "Insert":
                insert(first, second);
                break;
        }
        
        function add(el) {
            arr.push(el);
        }
        function remove(num) {
            arr = arr.filter(el => el != num);
        }
        function removeAt(index) {
            arr.splice(index, 1);
        }
        function insert(num, index) {
            arr.splice(index, 0, num);
        }
    }
    console.log(arr.join(' '));
}

manipulationsArr(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']);
    // 4 53 6 8 43 3