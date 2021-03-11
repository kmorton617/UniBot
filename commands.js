const gif = require("./commands/gif.js");
const yell = require("./commands/yell.js");
const joke = require("./commands/joke.js");

const commands = {
    gif, joke, yell,
};
const commandStr = ["gif", "joke", "yell"];

module.exports = async function (msg) {
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
    }
}