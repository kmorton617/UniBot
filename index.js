console.log('Yo wassup');

require("dotenv").config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.BOTTOKEN);
client.on('ready', readyDiscord);

async function readyDiscord() {
    console.log('working!');
}


const commandHandler = require("./commands");

client.on('message', commandHandler);