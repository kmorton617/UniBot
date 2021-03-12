module.exports = {
    name: 'yell',
	description: 'yell back',
    async execute(msg, tokens, client){
        msg.channel.send('I DONT LIKE CONFRONTATION');
    }
}