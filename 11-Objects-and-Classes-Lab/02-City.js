function printCity(city) {
    for (let key of Object.keys(city)) {
        console.log(key, '->', city[key]);
    }
}

let city = {
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
};

printCity(city);
/*
name -> Sofia
area -> 492
population -> 1238438
country -> Bulgaria
postCode -> 1000
*/