function convertJson(name, lastName, hairColor) {
    let result = {
        name,
        lastName,
        hairColor
    }
    console.log(JSON.stringify(result))
}

convertJson('George','Jones','Brown');
/*
{"name":"George", 
"lastName":"Jones",
"hairColor":"Brown"}
*/
