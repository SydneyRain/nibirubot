/*-------------- Modules --------------*/
const { Command }            = require('klasa');
const Cowsay                 = require('cowsay');
/*-------------------------------------*/

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            description: language => language.get("COWSAY_DESCRIPTION"),
            extendedHelp: language => language.get("COWSAY_EXTENDEDHELP"),
            name: 'cowsay',
            runIn: ['text', 'dm'],
            usage: '[textToSay:string]'
        });
    }

    async run(msg, [textToSay]) {
        if (!textToSay) throw msg.language.get("COWSAY_ERROR");
        return msg.sendCode('', Cowsay.say({text : textToSay}));
    }
}