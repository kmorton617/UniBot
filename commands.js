const gif = require("./commands/gif.js");
const yell = require("./commands/yell.js");
const joke = require("./commands/joke.js");
const magic8 = require("./commands/magic8.js");
const bully = require("./commands/bully.js");
const jujutsu = require("./commands/jujutsu.js");
const goodboy = require("./commands/goodboy.js");
const haiku = require("./commands/haiku.js");
const syllables = require("syllables");

const commands = {
    gif, joke, yell, magic8, jujutsu, goodboy
};
const commandStr = ["gif", "joke", "yell", "magic8", "jujutsu", "goodboy"];

const bullyList = ["daddy"];

module.exports = async function (msg) {
    if (msg.channel.id == '819410522445185034' || msg.channel.id == '819323001404653592') {
        const syll = require('syllables');
        console.log(syllables(msg.content));
        if (syllables(msg.content) == 17) {
            haiku(msg, msg.content);
        }
        let tokens = msg.content.split(" ");
        let command = tokens.shift();
        if (command.charAt(0) === "!") {
            //Valid Command!
            command = command.substring(1);
            if (!commandStr.includes(command)) {
                msg.channel.send("Command \"" + command + "\" not recognized" );
            } else {
                commands[command](msg, tokens);
            }
        } else if (bullyList.includes(msg.member.user.username)) {
            bully(msg, tokens);
        }
    }
}