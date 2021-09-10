function starEnigma(input) {
    let count = Number(input.shift());

    let pattern = /[sStTaArR]/g;
    let decrypted = [];

    while (count > 0) {
        let token = input[0];
        let match = token.match(pattern);
        if( match != null){
            let reduce = match.length;
    
            let line = input.shift().split("");
            let decrypt = "";
            for (let i = 0; i < line.length; i++) {
                let charNum = line[i].charCodeAt(0) - reduce;
                decrypt += String.fromCharCode(charNum);
            }
            decrypted.push(decrypt);
        }

        if(match == null){
            decrypted.push(token);
        }
        count--;
    }

    let message = decrypted.shift();
    let attacked = [];
    let destroyed = [];

    while (message != null) {
        // let patternDecrypt = /@(?<planet>[A-Za-z]+)[^@:!\->]*?:(?<population>\d+)[^@:!\->]*?!(?<action>[A|D])![^@:!\->]*?->(?<soldiers>\d+)/g;
        let patternDecrypt = /@(?<planet>[A-Za-z]+)[^@\-!:>]*:([0-9]+)[^@\-!:>]*!(?<action>[AD])![^@\-!:>]*->(?<population>[0-9]*)/g;
        let matched = patternDecrypt.exec(message);

        if(matched != null){
            let [_, planet, population, action, soldiers] = matched;
    
            if (action == 'A') {
                if (!attacked.includes(planet)) {
                    attacked.push(planet);
                }
            } else {
                if (!destroyed.includes(planet)) {
                    destroyed.push(planet);
                }
            }
        }
        message = decrypted.shift();
    }

    let sortedA = attacked.sort((a, b) => a.localeCompare(b));
    let sortedD = destroyed.sort((a, b) => a.localeCompare(b));

    console.log('Attacked planets: ' + attacked.length);
    if (attacked.length > 0) {
        for (let el of sortedA) {
            console.log('-> ' + el);
        }
    }
    console.log('Destroyed planets: ' + destroyed.length);
    if (destroyed.length > 0) {
        for (let el of sortedD) {
            console.log('-> ' + el);
        }
    }
}


starEnigma(["2", "STCDoghudd4=63333$D$0A53333", "EHfsytsnhf?8555&I&2C9555SR"]);
/*
Attacked planets: 1
-> Alderaa
Destroyed planets: 1
-> Cantonica
*/

starEnigma(["3", "tt(''DGsvywgerx>6444444444%H%1B9444", "GQhrr|A977777(H(TTTT", "EHfsytsnhf?8555&I&2C9555SR"]);
/*
Attacked planets: 0
Destroyed planets: 2
-> Cantonica
-> Coruscant
*/