const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/');

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

var commandStr = fs.readFileSync("./command_names.txt", "utf-8").split(",");

const bullyList = ["daddy"];

module.exports = async function (msg) {
    if (msg.channel.id == '819410522445185034' || msg.channel.id == '819323001404653592') {
        let tokens = msg.content.split(" ");
        let command = tokens.shift();
        if (command.charAt(0) === "!") {
            //Valid Command!
            command = command.substring(1);
            if (!commandStr.includes(command)) { //unrecognized command
                msg.channel.send("Command \"" + command + "\" not recognized\ntype \"!help\" for more info");
            } else { //proper command
                client.commands.get(command).execute(msg, tokens, client);
            }
        } else if (bullyList.includes(msg.member.user.username)) {
            client.commands.get('bully').execute(msg, tokens);
        }
    }
}