/*-------------- Modules --------------*/
const { Command }            = require('klasa');
/*-------------------------------------*/

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            description: language => language.get("SAY_DESCRIPTION"),
            extendedHelp: language => language.get("SAY_EXTENDEDHELP"),
            name: 'say',
            runIn: ['text', 'dm'],
            usage: '[textToSay:string]'
        });
    }

    async run(msg, [textToSay]) {
        if (!textToSay) throw msg.language.get("SAY_ERROR");
        return msg.sendMessage(textToSay);
    }
}