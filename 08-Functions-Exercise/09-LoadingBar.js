function loadingBar(n) {
    if (n == 100) {
        console.log('100% Complete!');
        console.log('[%%%%%%%%%%]');
    } else {
        let result = '';

        for (let i = 0; i < n / 10; i++) {
            result += '%';
        }
        
        for (let j = n / 10 + 1; j < 11; j++) {
            result += '.';
        }

        console.log(`${n}% [${result}]`);
        console.log('Still loading...');
    }
}

loadingBar(30);
/*
30% [%%%.......]
Still loading...
*/

loadingBar(50);
/*
50% [%%%%%.....]
Still loading...
*/

loadingBar(100);
/*
100% Complete!
[%%%%%%%%%%]
*/