/*-------------- Modules --------------*/
const { Command }            = require('klasa');
/*-------------------------------------*/

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            description: language => language.get("CVC_DESCRIPTION"),
            extendedHelp: language => language.get("CVC_EXTENDEDHELP"),
            aliases: ['cvc', 'cv', 'createvoicechannel', 'create-voice', 'createvoice'],
            name: 'creatvoichanl',
            runIn: ['text'],
            usage: '[channelname:string]',
            permissionLevel: 6,
            requiredPermissions: ["MANAGE_CHANNELS"],
        });
    }

    async run(msg, [channelname]) {
        if (!channelname) return msg.language.get("CVC_ERROR");
        await msg.guild.channels.create(channelname, {type: 'voice'}).catch(err => msg.say(`**ERROR**: An error has occurred!\nError: \`\` ${err}\`\``));
        await msg.sendMessage(`Created voice channel ${channelname} successfully!`);
    }
}