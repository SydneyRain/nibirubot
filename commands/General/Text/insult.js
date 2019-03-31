/*-------------- Modules --------------*/
const { Command }            = require('klasa');
const Insult                 = require('insult');
/*-------------------------------------*/

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            description: 'Insult somebody you don\'t like.',
            extendedHelp: '+insult Nibiru :: Will insult Nibiru (What\'d I ever do to you?).',
            name: 'insult',
            nsfw: true,
            runIn: ['text'],
            usage: "[user:mention]"
        });
    }

    async run(msg, [user]) {
        if(!msg.channel.nsfw) throw "This command may only be used in NSFW channels.";
        if(!user) user = msg.author;
        return msg.sendMessage(`${user}, ${Insult.Insult()}`)
    }
}