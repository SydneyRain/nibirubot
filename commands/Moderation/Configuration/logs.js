/*-------------- Modules --------------*/
const { Command }            = require('klasa');
/*-------------------------------------*/

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            description: language => language.get("LOGS_DESCRIPTION"),
            extendedHelp: language => language.get("LOGS_EXTENDEDHELP"),
            name: 'logs',
            runIn: ['text'],
            usage: '<enable|disable> [args:string]',
            subcommands: true,
            usageDelim: " ",
            permissionLevel: 6,
            requiredPermissions: ["EMBED_LINKS"],
        });
    }

    async enable(msg) {
        if(msg.guild.settings.logs.enabled) throw msg.language.get("LOGS_ENABLED_ERROR")
        let channel;
        if (msg.mentions.channels.size) { channel = msg.mentions.channels.first(); }
        else { return msg.send('Usage: ``logs enable [channel]`` - Enables the logs.\nExample: ``logs enable #logs`` - Enables the Logs in the channel "#logs"'); }
        await msg.guild.settings.update([["logs.enabled", true], ["logs.channel", channel.id], ["logs.logEmojiCreate", false],  ["logs.logEmojiDelete", false],  ["logs.logChannelCreate", true],  ["logs.logChannelDelete", true],  ["logs.logChannelUpdate", true],  ["logs.logGuildMemberAdd", true],  ["logs.logGuildMemberAdd", true],  ["logs.logGuildMemberRemove", true],  ["logs.logMessageUpdate", true],  ["logs.logMessageDelete", true],  ["logs.logMessageReactionAdd", false],  ["logs.logMessageReactionAdd", false], ["logs.logUserUpdate", false]], msg.guild).then(() => {
            msg.send(`${msg.language.get("LOGS_ENABLED_SUCCESS")}${channel.name}!`);
        });
    }
    
    async disable(msg) {
        if(!msg.guild.settings.logs.enabled) throw msg.language.get("LOGS_DISABLED_ERROR")
        await msg.guild.settings.update("logs.enabled", false);
        return msg.send(`${msg.language.get("LOGS_DISABLED_SUCCESS")}`);
    }
}