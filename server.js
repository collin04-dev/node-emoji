const emoji = require ("node-emoji");
const http = require("http");

let emojiArray = [];

    for(let x = 0; x < 10; x++) {
        emojiArray.push(emoji.random());
    }


const server = http.createServer((req, res) => {
    res.write(`
        <html>
            <head>
                <meta charset="UTF-8">
            </head>
            <body>
                <p>Emoji List</p>
                ${ emojiArray.map(emoji => emoji.emoji).join('<br/>') }
            </body>
        </html>
    `);
    res.end();
  });
  server.listen(8001);