function solve(array) {
    let pattern = /([#@])(?<firstWord>[A-Za-z]{3,})\1\1(?<secondWord>[A-Za-z]{3,})\1/g;
    let match = pattern.exec(array);
    let result = [];
    let wordPairsCounter = 0;
    while (match !== null) {
        let firstWord = match.groups.firstWord;
        let secondWord = match.groups.secondWord;
        wordPairsCounter++;
        if (firstWord === secondWord.split('').reverse().join('')) {
            result.push(`${firstWord} <=> ${secondWord}`);
        }
        match = pattern.exec(array);
    }
    if (wordPairsCounter > 0) {
        console.log(`${wordPairsCounter} word pairs found!`)
    } else {
        console.log('No word pairs found!');
    }
    if (result.length > 0) {
        console.log('The mirror words are:');
        console.log(result.join(', '));
    } else {
        console.log('No mirror words!');
    }
}