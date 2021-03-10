console.log('Yo wassup');

require("dotenv").config();

const fetch = require('node-fetch');

const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.BOTTOKEN);
client.on('ready', readyDiscord);

function readyDiscord() {
    console.log('working!');
}

const saySomethingFunny = [
    'Choodler does it again',
    'my bitch wife',
    'I hate poor people',
    'thanks Obama',
    'why are there French people',
    'carls face OOOOOO roasted *mlg horn sound*'
]

client.on('message', gotMessage);

async function gotMessage(msg) {
    if (msg.channel.id == '819323001404653592') {

        let tokens = msg.content.split(' ');
        let command = tokens[0];

        if (command === '!yell') {
            msg.channel.send('I DONT LIKE CONFRONTATION');
        }
        else if (command === '!joke') {
            const index = Math.floor(Math.random() * saySomethingFunny.length);
            msg.channel.send(saySomethingFunny[index]);
        }
        else if (command == '!gif') {
            let keywords = 'funny';
            if (tokens.length > 1) {
                keywords = tokens.slice(1, tokens.length).join(' ');
            }
            let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}`;
            let reponse = await fetch(url);
            let json = await reponse.json();
            const index = Math.floor(Math.random() * json.results.length);
            msg.channel.send('Search Term: ' + keywords);
            msg.channel.send(json.results[index].url);
        }
    }
}