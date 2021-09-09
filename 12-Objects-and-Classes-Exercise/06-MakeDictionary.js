function dictionary(list) {
    let dictObj = {};
    let word = [];
    let explane = [];

    for (let task of list) {
        let taskObject = JSON.parse(task);
        Object.assign(dictObj, taskObject);
    }

    let entries = Object.entries(dictObj);
    for (let [key, value] of entries) {
        word.push(key);
        explane.push(value);
    }
    word.sort();
    for (let i = 0; i < word.length; i++) {
        console.log(`Term: ${word[i]} => Definition: ${dictObj[word[i]]}`);
    }
}

dictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}']);

/*
Term: Boiler => Definition: A fuel-burning apparatus or container for heating water.
Term: Bus => Definition: A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare.
Term: Coffee => Definition: A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub.
Term: Microphone => Definition: An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded.
Term: Tape => Definition: A narrow strip of material, typically used to hold or fasten something.
*/