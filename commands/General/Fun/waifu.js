/*-------------- Modules --------------*/
const { Command }            = require('klasa');
/*-------------------------------------*/

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            description: language => language.get("WAIFU_DESCRIPTION"),
            extendedHelp: language => language.get("WAIFU_EXTENDEDHELP"),
            name: 'waifu',
            runIn: ['text', 'dm'],
        });
    }

    async run(msg) {
        return msg.sendMessage(`https://www.thiswaifudoesnotexist.net/example-${Math.floor(Math.random() * 70000)}.jpg`);
    }
}