module.exports =  {
    name: 'jujutsu',
	description: 'countdown to the best day of the week\nadd \"play\" to send video',
    async execute(msg, tokens, client){
        if (tokens == "play") {
            msg.channel.send("https://www.youtube.com/watch?v=J3sPlc1ND14");
            return;
        }
        var date = new Date();

        var day = date.getDay();
        var hour = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        if (day == 5) {
            //msg.channel.send("Gentlemen:", {files: ["https://i.redd.it/mfaw103ijtc61.jpg"]});

            msg.channel.send("Gentlemen: \nhttps://www.youtube.com/watch?v=J3sPlc1ND14");
        } else {
            var dayDiff = 4 - day;
            if (dayDiff < 0) {
                dayDiff += 7;
            }
            var dayStr = 'day';
            var hourStr = 'hour';
            var minStr = 'minute';
            var secStr = 'second';
            hoursDiff = 24 - hour;
            minutesDiff = 60 - minutes;
            secondsDiff = 60 - seconds;
            if (dayDiff != 1) {
                dayStr = dayStr + 's'
            }
            if (hoursDiff != 1) {
                hourStr = hourStr + 's'
            }
            if (minutesDiff != 1) {
                minStr = minStr + 's'
            }
            if (secondsDiff != 1) {
                secStr = secStr + 's'
            }
            msg.channel.send("Jujutsu Kaisen Friday will commence in: " + dayDiff + " " + dayStr + " - " 
                                                                        + hoursDiff + " " + hourStr + "  - " 
                                                                        + minutesDiff + " " + minStr + " - and " 
                                                                        + secondsDiff + " " + secStr + "!");
        }
    }
}