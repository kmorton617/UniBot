const fetch = require('node-fetch');

module.exports = async function (msg, args) {
    let keywords = 'funny';
    if (args.length > 0) {
        keywords = args.join(" ");
    }
    let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}`;
    let reponse = await fetch(url);
    let json = await reponse.json();
    const index = Math.floor(Math.random() * json.results.length);
    msg.channel.send('Search Term: ' + keywords);
    msg.channel.send(json.results[index].url);
}