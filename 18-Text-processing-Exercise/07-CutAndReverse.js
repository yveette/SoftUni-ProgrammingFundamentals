function cutAndReverse(string) {
    let half = string.length / 2;

    let word1 = string
        .substring(0, half)
        .split('')
        .reverse()
        .join('');
    let word2 = string
        .substring(half)
        .split('')
        .reverse()
        .join('');

    console.log(word1);
    console.log(word2);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
// ThisIsDifficult
// ThisIsSoAmazing

cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');
// IBetYouCantDoThis
// ImSoGoodAtThisJob