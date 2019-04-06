/*-------------- Modules --------------*/
const { Command }            = require('klasa');
/*-------------------------------------*/

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            description: language => language.get("CHANNELID_DESCRIPTION"),
            extendedHelp: language => language.get("CHANNELID_EXTENDEDHELP"),
            name: 'channelid',
            runIn: ['text']
        });
    }

    async run(msg) {
        msg.sendMessage(`This channel's ID is: ${msg.channel.id}`)
    }
}