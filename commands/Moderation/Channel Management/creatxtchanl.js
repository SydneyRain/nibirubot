/*-------------- Modules --------------*/
const { Command }            = require('klasa');
/*-------------------------------------*/

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            description: language => language.get("CTC_DESCRIPTION"),
            extendedHelp: language => language.get("CTC_EXTENDEDHELP"),
            aliases: ['ctc', 'ct', 'creattxtchanl', 'ctch', 'create-text-channel', 'createtxtchannel'],
            name: 'creatxtchanl',
            runIn: ['text'],
            usage: '[channelname:string]',
            permissionLevel: 6,
            requiredPermissions: ["MANAGE_CHANNELS"],
        });
    }

    async run(msg, [channelname]) {
        if (!channelname) return msg.language.get("CVC_ERROR");
        await msg.guild.channels.create(channelname, {type: 'text'}).catch(err => msg.say(`**ERROR**: An error has occurred!\nError: \`\` ${err}\`\``));
        await msg.sendMessage(`Created text channel ${channelname} successfully!`);
    }
}