const fs = require('fs');
var commandStr = fs.readFileSync("./command_names.txt", "utf-8").split(",");

module.exports = {
    name: 'help',
	description: 'get information about various commands',
    async execute(msg, tokens, client){
        let keywords = '';
        keywords = tokens.join(" ");
        if (tokens.length == 0) {
            msg.channel.send(commandStr.join(", "));
            msg.channel.send("For more information about a specific command, type \"!help command_name\"");
        }
        if (commandStr.includes(keywords)) {
            msg.channel.send("Name: " + client.commands.get(keywords).name + "\nDescription: " + client.commands.get(keywords).description);
        } else {
            msg.channel.send("Command \"" + keywords + "\" not recognized");
        }
    }
}