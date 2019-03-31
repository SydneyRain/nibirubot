/*-------------- Modules --------------*/
const { Command }            = require('klasa');
/*-------------------------------------*/

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            description: 'Prints a randomly generated waifu from www.thiswaifudoesnotexist.net.',
            extendedHelp: '+waifu :: Prints a random waifu.',
            name: 'waifu',
            runIn: ['text', 'dm'],
        });
    }

    async run(msg) {
        return msg.sendMessage(`https://www.thiswaifudoesnotexist.net/example-${Math.floor(Math.random() * 70000)}.jpg`);
    }
}