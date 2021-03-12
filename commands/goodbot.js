const uwu = [ "UwU", "Uwu", "uwU", "ÚwÚ", "uwu", "☆w☆", "♥w♥", " ︠uw ︠u ", "(uwu)"]
module.exports = {
    name: 'goodbot',
	description: 'uwu',
    async execute(msg, tokens, client){
        const random = Math.floor(Math.random() * uwu.length);
        msg.channel.send(uwu[random]);
    }
}