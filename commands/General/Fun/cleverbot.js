/*-------------- Modules --------------*/
const { Command }            = require('klasa');
const cleverbot              = require("cleverbot.io");
/*-------------------------------------*/
const cleverbotio            = new cleverbot('FzV58xCzjmDEFXel', 'z7KR0YW1FaIb8PU1Z9Jfi3gYqIqMvuGv'); // I left this here on purpose. If it becomes a problem I'll remove it then.
/*-------------------------------------*/

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            description: language => language.get("CLEVERBOT_DESCRIPTION"),
            extendedHelp: language => language.get("CLEVERBOT_EXTENDEDHELP"),
            name: 'cleverbot',
            runIn: ['text', 'dm'],
            usage: '[textToSay:string]'
        });
    }

    async run(msg, [textToSay]) {
        if (!textToSay) throw msg.language.get("CLEVERBOT_ERROR");
        
        cleverbotio.setNick("Nibiru");
        cleverbotio.create(function () {
            cleverbotio.ask(textToSay, function (err, response) {
                msg.reply(response)
            });
        });
    }
}