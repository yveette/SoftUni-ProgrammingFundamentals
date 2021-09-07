function dungeonestDark(arr) {
    let bestroom = 0;
    let health = 100;
    let coins = 0;

    let dungeon = arr[0].split('|');

    for (let room of dungeon) {
        let tokens = room.split(' ');
        let encountered = tokens[0];
        let value = Number(tokens[1]);

        if (encountered == 'potion') {
            if (health + value > 100) {
                console.log(`You healed for ${100 - health} hp.`);
                health = 100;
            } else {
                console.log(`You healed for ${value} hp.`);
                health += value;
            }
            console.log(`Current health: ${health} hp.`);
            bestroom++;
        } else if (encountered == 'chest') {
            coins += value;
            console.log(`You found ${value} coins.`);
            bestroom++;
        } else {
            health -= value;
            if (health <= 0) {
                console.log(`You died! Killed by ${encountered}.`);
                bestroom++;
                console.log(`Best room: ${bestroom}`);
                break;
            } else {
                console.log(`You slayed ${encountered}.`);
                bestroom++;
            }
        }
    }

    if (bestroom == dungeon.length) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}

dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
/*
You slayed rat.
You slayed bat.
You healed for 10 hp.
Current health: 80 hp.
You slayed rat.
You found 100 coins.
You died! Killed by boss.
Best room: 6
*/
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
/*
You slayed cat.
You healed for 10 hp.
Current health: 100 hp.
You slayed orc.
You found 10 coins.
You slayed snake.
You found 110 coins.
You've made it!
Coins: 120
Health: 65
*/