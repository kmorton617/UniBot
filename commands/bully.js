module.exports =  {
    name: 'bully',
	description: 'bullies designated members',
    async execute(msg, tokens, client){
        var newMsg = msg.content.toLowerCase().split('').map(function(c){
        return Math.random() < .5? c : c.toUpperCase();
        }).join('');
        setTimeout(() => { msg.channel.send(newMsg); }, 1000);
    }
}