const uwu = [ "UwU", "Uwu", "uwU", "ÚwÚ", "uwu", "☆w☆", "♥w♥", " ︠uw ︠u ", "(uwu)"]
module.exports = async function (msg, tokens) {
    const random = Math.floor(Math.random() * uwu.length);
    msg.channel.send(uwu[random]);
}