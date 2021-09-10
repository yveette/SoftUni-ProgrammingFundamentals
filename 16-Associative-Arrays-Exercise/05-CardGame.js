function cardGame(arr) {
    let cardPoints = {
        'J': 11, 'Q': 12, 'K': 13, 'A': 14,
        'S': 4, 'H': 3, 'D': 2, 'C': 1,
    };
    let players = {};
    let result = {};

    for (let command of arr) {
        let token = command.split(': ')
        let person = token[0];
        let cards = token[1].split(', ');

        if (!Object.keys(players).includes(person)) {
            players[person] = [];
        }

        players[person] = players[person].concat(cards)
    }

    for (let [person, cards] of Object.entries(players)) {
        result[person] = 0;

        for (let i = 0; i < cards.length; i++) {
            let card = cards[i];

            if (cards.indexOf(card) === i) {
                let cardArray = card.split('');
                let type = cardArray.pop();
                let power = cardArray.join('');
                let points = 0;

                if (Object.keys(cardPoints).includes(power)) {
                    points = cardPoints[power] * cardPoints[type];
                } else {
                    points = Number(power) * cardPoints[type];
                }

                result[person] += points;
            }
        }
    }

    for (let [key, value] of Object.entries(result)) {
        console.log(`${key}: ${value}`);
    }
}

cardGame(['Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD']);
/*
Peter: 167
Tomas: 175
Andrea: 197
*/