module.exports = async function (msg, word) {
    
    var response = [];
        var isSpecialCase = false;
        var nums = (word.match(/[aeiou]/gi) || []).length;
        //debugger;
        if (isSpecialCase == false && (word.match(/[0123456789]/gi) || []).length == word.length ){
            // has digits
            response.push(word);
            isSpecialCase = true;
        }

        if (isSpecialCase == false && word.length < 4){
            // three letters or less
            response.push(word);
            isSpecialCase = true;
        } 

        if (isSpecialCase == false && word.charAt(word.length-1) == "e"){
            if (isVowel(word.charAt(word.length-2)) == false){
                var cnt = (word.match(/[aeiou]/gi) || []).length;
                if (cnt == 3){
                    if (hasDoubleVowels(word)){
                        // words like "piece, fleece, grease"
                        response.push(word);
                        isSpecialCase = true;
                    }
                }
                if (cnt == 2){
                    // words like "phase, phrase, blaze, name", 
                    if (hasRecurringConsonant(word) == false) {
                    // but not like "syllable"
                    response.push(word);
                    isSpecialCase = true;
                    }

                }                    
            }
        }

        if (isSpecialCase == false){
            const syllableRegex = /[^aeiouy]*[aeiouy]+(?:[^aeiouy]*$|[^aeiouy](?=[^aeiouy]))?/gi;
            response = word.match(syllableRegex);
        }
    msg.channel.send("Haiku Detected:");
    msg.channel.send(response[0] + "-" + response[1] + "-" + response[2] + "-" + response[3] + "-" + response[4]);
    msg.channel.send(response[5] + "-" + response[6] + "-" + response[7] + "-" + response[8] + "-" + response[9] + "-" + response[10] + "-" + response[11]);
    msg.channel.send(response[12] + "-" + response[13] + "-" + response[14] + "-" + response[15] + "-" + response[16]);
}
