const saySomethingFunny = [
    'Choodler does it again',
    'my bitch wife',
    'I hate poor people',
    'thanks Obama',
    'why are there French people',
    'carls face OOOOOO roasted *mlg horn sound*'
]

module.exports = async function (msg, tokens) {
    const index = Math.floor(Math.random() * saySomethingFunny.length);
    msg.channel.send(saySomethingFunny[index]);
}