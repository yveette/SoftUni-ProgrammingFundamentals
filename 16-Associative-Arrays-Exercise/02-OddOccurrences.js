function oddOccurrences(string) {
    let occurances = {};
    let listStrigs = string.split(' ');

    for (let token of listStrigs) {
        let stringLower = token.toLowerCase();

        if (!Object.keys(occurances).includes(stringLower)) {
            occurances[stringLower] = 0;
        }

        occurances[stringLower] += 1;
    }

    let result = '';

    for (let [key, value] of Object.entries(occurances)) {
        if (value % 2 !== 0) {
            result += `${key} `;
        }
    }

    console.log(result);
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
