const fetch = require('node-fetch');

module.exports = {
    name: 'gif',
	description: 'send gif\nadd additional keywords to search for specific gifs',
    async execute(msg, tokens, client){
        let keywords = 'funny';
        if (tokens.length > 0) {
            keywords = tokens.join(" ");
        }
        let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}`;
        let reponse = await fetch(url);
        let json = await reponse.json();
        const index = Math.floor(Math.random() * json.results.length);
        msg.channel.send('Search Term: ' + keywords);
        msg.channel.send(json.results[index].url);
    }
}