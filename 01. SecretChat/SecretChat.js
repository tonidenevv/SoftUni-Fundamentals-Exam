function solve(input) {
    let text = input.shift();
    let commands = {
        InsertSpace,
        Reverse,
        ChangeAll
    }
    while (input[0] !== 'Reveal') {
        let tokens = input.shift().split(':|:');
        let command = tokens[0];
        let firstParam = tokens[1];
        let secondParam = tokens[2];

        text = commands[command](text, firstParam, secondParam);
    }
    console.log(`You have a new text message: ${text}`)

    function InsertSpace(text, index) {
        text = text.split('');
        text.splice(index, 0, ' ');
        text = text.join('');
        console.log(text);
        return text;
    }
    
    function Reverse(text, substring) {
        let index = text.indexOf(substring);
        if (index != - 1) {
            let leftPart = text.slice(0, index);
            let rightPart = text.slice(index + substring.length);
            text = leftPart + rightPart + substring.split('').reverse().join('');
            console.log(text);
        } else {
            console.log('error');
        }
        return text;
    }
    
    function ChangeAll(text, substring, replacement) {
        text = text.split(substring).join(replacement);
        console.log(text);
        return text;
    }
}


