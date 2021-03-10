console.log('Yo wassup');

const Discord = require('discord.js');
const client = new Discord.Client();

client.login();
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

function gotMessage(msg) {
    if (msg.channel.id == '819323001404653592') {
        if (msg.content === 'yell') {
            msg.channel.send('I DONT LIKE CONFRONTATION');
        }
        else if (msg.content === 'say something funny') {
            const index = Math.floor(Math.random() * saySomethingFunny.length);
            msg.channel.send(saySomethingFunny[index]);
        }
    }
}