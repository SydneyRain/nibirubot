/*-------------- Modules --------------*/
const { Command }            = require('klasa');
/*-------------------------------------*/

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            description: 'Flips a coin.',
            extendedHelp: '+coinflip :: Flips a coin.',
            name: 'coinflip',
            runIn: ['text', 'dm']
        });
    }

    async run(msg) {
        var coinflips = ['Heads', 'Tails']
        return msg.sendMessage(`**${msg.author.username}** flipped a coin, and it landed on **${coinflips[Math.floor(Math.random() * coinflips.length)]}**!`);
    }
}