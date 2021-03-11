module.exports = async function (msg, tokens) {
    var date = new Date();

    var day = date.getDay();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    if (day == 5) {
        msg.channel.send("Gentlemen:", {files: ["https://i.redd.it/mfaw103ijtc61.jpg"]});
    } else {
        const dayDiff = 5 - day;
        if (dayDiff < 0) {
            dayDiff += 7;
        }
        hoursDiff = 24 - hour;
        minutesDiff = 60 - minutes;
        secondsDiff = 60 - seconds;
        msg.channel.send("Jujutsu Kaisen Friday will commence in: " + dayDiff + " days - " + hoursDiff + " hours - " + minutesDiff + " minutes - and " + secondsDiff + " seconds!");
    }
}