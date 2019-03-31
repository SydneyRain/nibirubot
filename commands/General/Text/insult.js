/*-------------- Modules --------------*/
const { Command }            = require('klasa');
const Insult                 = require('insult');
/*-------------------------------------*/

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            description: language => language.get("INSULT_DESCRIPTION"),
            extendedHelp: language => language.get("INSULT_EXTENDEDHELP"),
            name: 'insult',
            nsfw: true,
            runIn: ['text'],
            usage: "[user:mention]"
        });
    }

    async run(msg, [user]) {
        if(!msg.channel.nsfw) throw msg.language.get("NSFW_ONLY");
        if(!user) user = msg.author;
        return msg.sendMessage(`${user}, ${Insult.Insult()}`);
    }
}