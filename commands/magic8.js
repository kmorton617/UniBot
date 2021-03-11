const intros = [
    "hmmmmmm",
    "I'm, thinking...",
    "now that you mention it",
    "since you asked nicely"
]

const magic8response = [
    "As I see it, yes.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Dont count on it.",
    "It is certain.",
    "It is decidedly so."
]


module.exports = async function (msg, tokens) {
    const index = Math.floor(Math.random() * magic8response.length);
    const intro = Math.random() * 100;  
    const r = Math.floor(Math.random() * intros.length);
    msg.channel.send(intros[r]);
    setTimeout(() => { msg.channel.send(magic8response[index]); }, 1500);
}