/*-------------- Modules --------------*/
const { Command }            = require('klasa');
/*-------------------------------------*/

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            description: 'Gives somebody a cookie! :cookie:',
            extendedHelp: '+cookie Nibiru :: Gives a cookie to Nibiru.',
            name: 'cookie',
            runIn: ['text'],
            usage: '[member:user]'
        });
    }

    async run(msg, [mentioned = msg.member]) {
        if (!mentioned) { return msg.send('Usage: ``cookie [user]`` - Gives a user a cookie.\nExample: ``cookie Nibiru`` - Gives a cookie to Nibiru.') }
        return msg.sendMessage(`${mentioned}, you got a :cookie: from ${msg.author.username}!`)
    }
}