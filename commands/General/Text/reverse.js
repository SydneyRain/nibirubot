/*-------------- Modules --------------*/
const { Command }            = require('klasa');
/*-------------------------------------*/

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            description: language => language.get("REVERSE_DESCRIPTION"),
            extendedHelp: language => language.get("REVERSE_EXTENDEDHELP"),
            name: 'reverse',
            runIn: ['text', 'dm'],
            usage: '[textToRevert:string]'
        });
    }

    async run(msg, [textToRevert]) {
        function reverseString(str){
            return str.split("").reduce(function(revString, char){
                return char + revString;
            }, "");
        }

        if (!textToRevert) throw msg.language.get("REVERSE_ERROR");

        return msg.sendMessage(reverseString(`${textToRevert}`));
    }
}