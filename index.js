const emoji = require ("node-emoji");


let emojiArray = [];

function logemoji () {
    for(let x = 0; x < 10; x++) {
        emojiArray.push(emoji.random().emoji);
        console.log(emojiArray[x]);
    }
}

logemoji();