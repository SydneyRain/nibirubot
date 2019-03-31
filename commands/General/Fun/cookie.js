/*-------------- Modules --------------*/
const { Command }            = require('klasa');
/*-------------------------------------*/

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            description: language => language.get("COOKIE_DESCRIPTION"),
            extendedHelp: language => language.get("COOKIE_EXTENDEDHELP"),
            name: 'cookie',
            runIn: ['text'],
            usage: '[member:user]'
        });
    }

    async run(msg, [mentioned = msg.member]) {
        if (!mentioned) throw msg.language.get("COOKIE_ERROR");
        return msg.sendMessage(`${mentioned}, you got a :cookie: from ${msg.author.username}!`);
    }
}